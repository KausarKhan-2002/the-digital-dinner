function MenuLink({ data }) {
  // console.log(data);

  return (
    <div className="flex gap-3 text-[.7rem]">
      <a href="#" className="text-gray-600 hover:text-black">
        Home
      </a>
      <a href="#" className="text-gray-600 hover:text-black">
        {data.city}
      </a>
      <span>{data.name}</span>
    </div>
  );
}

export default MenuLink;
