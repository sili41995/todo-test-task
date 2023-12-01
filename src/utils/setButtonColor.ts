import { IconBtnType } from 'constants/iconBtnType';
import theme from 'constants/theme';

function setButtonColor(btnType: IconBtnType): string {
  switch (btnType) {
    case IconBtnType.delete:
      return theme.colors.redBtnColor;

    case IconBtnType.logout:
      return theme.colors.redBtnColor;

    case IconBtnType.accept:
      return theme.colors.greenBtnColor;

    case IconBtnType.deleteTransparent:
      return 'transparent';

    case IconBtnType.toggleShowPassword:
      return 'transparent';

    case IconBtnType.clearFilter:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
