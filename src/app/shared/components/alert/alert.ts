export enum AlertType {
  SUCCESS,
  WARNING,
  ERROR,
  INFO
}

export class Alert {
  constructor(public readonly alertType: AlertType,
              public readonly message: string) {
  }
}
