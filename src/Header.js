const Header = () => {
  return (
    <div className="flex justify-between items-center space-x-6 bg-slate-400 h-36">
      <div className="flex items-center">
        <img
          src="https://cdn.dribbble.com/users/677572/screenshots/15446498/media/fb5214f261c459894b041ef74abc96ac.png?compress=1&resize=400x300"
          alt="logo"
          className="h-24 w-32 rounded-full mx-6"
        />
        <h1 className="text-5xl text-yellow-500 font-semibold">BrainyFools</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value="search"
          className="w-72 h-10 rounded-full text-center border text-gray-400"
        />
        <img
          className="h-14 mx-6"
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
