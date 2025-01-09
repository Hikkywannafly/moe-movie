import classNames from 'classnames';

// import { useTranslation } from "react-i18next";

export function BrandPill(props: {
  clickable?: boolean;
  hideTextOnMobile?: boolean;
  backgroundClass?: string;
}) {
  // const { t } = useTranslation();

  return (
    <div
      className={classNames(
        'flex items-center space-x-2 rounded-full px-4 py-2 text-type-logo',
        props.backgroundClass ?? 'bg-pill-background bg-opacity-50',
        props.clickable
          ? 'transition-[transform,background-color] hover:scale-105 hover:bg-pill-backgroundHover backdrop-blur-lg hover:text-type-logo active:scale-95'
          : '',
      )}
    >
      <span
        className={[
          'font-bold bg-clip-text  text-transparent rounded-xl drop-shadow-2xl animate-text bg-black',
          props.hideTextOnMobile ? 'hidden sm:block' : '',
        ].join(' ')}
      >
        MOE MOVIE
      </span>
    </div>
  );
}
