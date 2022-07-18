export interface httpRespond<T> {
  code: number,
  result: T,
  message: string,
  type: 'success' | 'error'
}
