import theme from 'constants/theme';
import { IconBtnType } from 'constants/iconBtnType';

function setIconFill(btnType: IconBtnType): string {
  switch (btnType) {
    case IconBtnType.delete:
      return theme.colors.redIconColor;

    case IconBtnType.logout:
      return theme.colors.redIconColor;

    case IconBtnType.accept:
      return theme.colors.greenIconColor;

    case IconBtnType.deleteTransparent:
      return theme.colors.redIconColor;

    case IconBtnType.toggleShowPassword:
      return theme.colors.primaryColor;

    case IconBtnType.clearFilter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
