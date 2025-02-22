'use client';
import classNames from 'classnames';
import Link from 'next/link';

import { BrandPill } from '@/components/layout/BrandPill';
export interface NavigationProps {
  bg?: boolean;
  noLightbar?: boolean;
  doBackground?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  bg,
  noLightbar = true,
  doBackground = true,
}) => {
  return (
    <>
      {/* lightbar */}
      {noLightbar ? (
        <div
          className='absolute inset-x-0 top-0 flex h-[88px] items-center justify-center'
          style={{
            top: `2px`,
          }}
        >
          <div className='absolute inset-x-0 -mt-[22%] flex items-center sm:mt-0'>
            {/* <Lightbar /> */}
          </div>
        </div>
      ) : null}

      {/* backgrounds - these are seperate because of z-index issues */}
      <div
        className='fixed z-[20] pointer-events-none left-0 right-0 top-0 min-h-[150px]'
        style={{
          top: `2px`,
        }}
      >
        <div
          className={classNames(
            'fixed left-0 right-0 h-20 flex items-center',
            doBackground
              ? 'bg-background-main border-b border-utils-divider border-opacity-50'
              : null,
          )}
        >
          {doBackground ? (
            <div className='absolute w-full h-full inset-0 overflow-hidden'>
              {/* <BlurEllipsis positionClass="absolute" /> */}
            </div>
          ) : null}
          <div className='opacity-0 absolute inset-0 block h-20 pointer-events-auto' />
          <div
            className={`${
              bg ? 'opacity-100' : 'opacity-0'
            } absolute inset-0 block h-24 bg-background-main transition-opacity duration-300`}
          >
            <div className='absolute -bottom-24 h-24 w-full bg-gradient-to-b from-background-main to-transparent' />
          </div>
        </div>
      </div>

      {/* content */}
      <div
        className='fixed pointer-events-none left-0 right-0 z-[60] top-0 min-h-[150px]'
        style={{
          top: `2px`,
        }}
      >
        <div className={classNames('fixed left-0 right-0 flex items-center')}>
          <div className='px-7 py-5 relative z-[60] flex flex-1 items-center justify-between'>
            <div className='flex items-center space-x-1.5 ssm:space-x-3 pointer-events-auto'>
              <Link
                className='block tabbable rounded-full text-xs ssm:text-base'
                href='/'
              >
                <BrandPill clickable />
              </Link>

              {/* <GoToLink
                className="block tabbable rounded-full text-xs ssm:text-base"
                href="/anime"
              >
                <Anime hideTextOnMobile clickable />
              </GoToLink>
              <Link
                className="block tabbable rounded-full text-xs ssm:text-base"
                to="/discover"
              >
                <Discover hideTextOnMobile clickable />
              </Link>
              <Link
                className="block tabbable rounded-full text-xs ssm:text-base"
                to="/scene-search"
              >
                <SceneSearch hideTextOnMobile clickable />
              </Link> */}
            </div>
            {/* <div className="relative pointer-events-auto">
              <LinksDropdown>
                {loggedIn ? <UserAvatar withName /> : <NoUserAvatar />}
              </LinksDropdown>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
