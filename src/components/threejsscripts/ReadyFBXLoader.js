import { Loader, LoadingManager } from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// FBXLoader resolves after parsing, while its images are still loading.
// Keep each model in Suspense until that model's own textures are ready.
export default class ReadyFBXLoader extends Loader {
  load(url, onLoad, onProgress, onError) {
    const manager = new LoadingManager();
    let model;
    let failed = false;
    const fail = error => {
      if (failed) return;
      failed = true;
      onError?.(error instanceof Error ? error : new Error(`Unable to load ${error}`));
    };
    // Match FBXLoader's existing fallback for missing optional texture images.
    // Their itemEnd still contributes to readiness; model/file parse errors below
    // remain fatal. One legacy missing image must not take down the whole page.
    manager.onLoad = () => {
      if (!failed && model) onLoad(model);
    };

    const loader = new FBXLoader(manager);
    loader.setPath(this.path);
    loader.setResourcePath(this.resourcePath);
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(url, result => { model = result; }, onProgress, fail);
  }
}
