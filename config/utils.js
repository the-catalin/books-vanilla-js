export class Utils {
  static friendlyUrl(str) {
    return str.trim().split(' ').join('+');
  }
}
