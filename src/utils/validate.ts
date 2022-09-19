/**
 * 邮箱校验
 */
export const validateEmail = (email: string) => {
  return /^([A-Za-z0-9-._]{2,18})+@[A-Za-z0-9-]+(.[A-Za-z0-9]+)+(.[A-Za-z]{0,6})$/.test(email);
};