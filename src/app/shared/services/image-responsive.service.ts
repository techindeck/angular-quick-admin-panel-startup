import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageResponsiveService {
  imgPath: string = '';
  ENV_PATH: {
    API_URI: string;
    CF_CDN_URI: string;
    CF_PATH: string;
    SRC: string;
    TRANSFORM: {
      size: {
        w75: string;
        w100: string;
        w125: string;
        w150: string;
        w175: string;
        w200: string;
        w400: string;
        w600: string;
      };
    };
  } = {
    API_URI: '',
    CF_CDN_URI: '',
    CF_PATH: '',
    SRC: '',
    TRANSFORM: {
      size: {
        w75: '',
        w100: '',
        w125: '',
        w150: '',
        w175: '',
        w200: '',
        w400: '',
        w600: '',
      },
    },
  };
  constructor() {
    this.ENV_PATH = environment.services.imagekitIO;
  }

  getImage(src: string, type: string): string {
    if (type === 'sm') this.imgPath = this.imageThumbSmall(src);
    if (type === 'md') this.imgPath = this.imageThumb(src);
    if (type === 'st') this.imgPath = this.imageThumbSets(src);
    return this.imgPath;
  }

  private imageThumbSets(imagePath: string): string {
    if (imagePath != null && imagePath != '' && imagePath != undefined) {
      if (imagePath.includes('images/no_img_ico.svg')) {
        return imagePath;
      } else {
        let image_set: string = `${this.getTransformation(
          this.ENV_PATH.TRANSFORM.size.w600,
          imagePath
        )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w400,
            imagePath
          )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w200,
            imagePath
          )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w175,
            imagePath
          )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w150,
            imagePath
          )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w125,
            imagePath
          )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w100,
            imagePath
          )},
          ${this.getTransformation(
            this.ENV_PATH.TRANSFORM.size.w75,
            imagePath
          )}`;

        return image_set;
      }
    } else {
      return 'assets/images/no_img_ico.svg';
    }
  }

  private imageThumb(imagePath: string): string {
    if (imagePath != null && imagePath != '' && imagePath != undefined) {
      if (imagePath.includes('/assets/images/no_img_ico.svg')) {
        return imagePath;
      } else {
        return `${this.getTransformation(
          this.ENV_PATH.TRANSFORM.size.w600,
          imagePath
        )}`;
      }
    } else {
      return '/assets/images/no_img_ico.svg';
    }
  }

  private imageThumbSmall(imagePath: string): string {
    if (imagePath != null && imagePath != '' && imagePath != undefined) {
      if (imagePath.includes('/assets/images/no_img_ico.svg')) {
        return imagePath;
      } else {
        return `${this.getTransformation(
          this.ENV_PATH.TRANSFORM.size.w100,
          imagePath
        )}`;
      }
    } else {
      return '/assets/images/no_img_ico.svg';
    }
  }

  private getTransformation(size: string, imageP: string): string {
    const img: string = imageP;
    return `${this.ENV_PATH.API_URI}${
      this.ENV_PATH.SRC
    }tr:n-image_${size}/${img.substring(
      this.ENV_PATH.CF_CDN_URI.length,
      imageP.length
    )}`;
  }
}
