import Logo from '../Logo';
import UserProfile from '../../UserProfile';

const DesktopHeader = () => {
  return (
    <div className="sticky top-0 border-b border-gray-200 z-30 bg-white/25 backdrop-blur-sm">
      <div className="flex h-[50px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <Logo />
          </div>
        </div>

        <UserProfile />
      </div>
    </div>
  );
};

export default DesktopHeader;
