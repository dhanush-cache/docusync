import { observer } from "mobx-react";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { ActionV2Separator } from "~/actions";
import {
  logout,
  navigateToAccountPreferences,
  navigateToProfileSettings,
  openKeyboardShortcuts,
} from "~/actions/definitions/navigation";
import { changeTheme } from "~/actions/definitions/settings";
import { DropdownMenu } from "~/components/Menu/DropdownMenu";
import { useMenuAction } from "~/hooks/useMenuAction";

type Props = {
  children?: React.ReactNode;
};

const AccountMenu: React.FC = ({ children }: Props) => {
  const { t } = useTranslation();

  const actions = React.useMemo(
    () => [
      openKeyboardShortcuts,
      ActionV2Separator,
      changeTheme,
      navigateToProfileSettings,
      navigateToAccountPreferences,
      ActionV2Separator,
      logout,
    ],
    []
  );

  const rootAction = useMenuAction(actions);

  return (
    <DropdownMenu action={rootAction} align="end" ariaLabel={t("Account")}>
      {children}
    </DropdownMenu>
  );
};

export default observer(AccountMenu);
