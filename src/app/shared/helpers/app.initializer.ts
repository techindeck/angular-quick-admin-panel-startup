import { ConfigService } from '../services/config.service';
import { StorageService } from '../services/storage.service';
import { eStorage, ICollection } from './interface';

export function appInitializer(
  _appConfig: ConfigService,
  _storageService: StorageService
) {
  return () =>
    new Promise<void>((resolve) => {
      // attempt to refresh token on app start up to auto authenticate
      _appConfig
        .read({})
        .subscribe({
          next: (res: ICollection[]) =>
            _storageService.setItem(
              eStorage.SS,
              'keyList',
              JSON.stringify(res)
              // JSON.stringify(res.map((item) => item.key))
            ),
        })
        .add(resolve);
    });
}
