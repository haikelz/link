const Link = () => {
  const blog = (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:ring-purple-200"><a href="https://haikelz.me" target="blank" rel="noreferrer" className="relative px-8 py-2.5 w-full transition-all ease-in duration-75 bg-gray-100 rounded-md group-hover:bg-opacity-0">Blog</a></button>);
  const facebook = (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:ring-purple-200"><a href="https://facebook.com/kelgfx" target="blank" rel="noreferrer" className="relative px-8 py-2.5 w-full transition-all ease-in duration-75 bg-gray-100 rounded-md group-hover:bg-opacity-0">Facebook</a></button>);
  const github = (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:ring-purple-200"><a href="https://github.com/haikelz" target="blank" rel="noreferrer" className="relative px-8 py-2.5 w-full transition-all ease-in duration-75 bg-gray-100 rounded-md group-hover:bg-opacity-0">Github</a></button>);
  const telegram = (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:ring-purple-200"><a href="https://t.me/pempek_kapal_selem" target="blank" rel="noreferrer" className="relative px-8 py-2.5 w-full transition-all ease-in duration-75 bg-gray-100 rounded-md group-hover:bg-opacity-0">Telegram</a></button>);
    return (
      <>
        <section className="mx-4">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mt-16">
              <img src="https://avatars.githubusercontent.com/u/77146709?v=4" className="rounded-full w-64" alt="profile" /> 
            </div>

            <h1 className="my-4 text-3xl font-bold tracking-wide">Haikel</h1>
            <ul className="flex flex-col">
              {blog}
              {facebook}
              {telegram}
              {github}
            </ul>
          </div> 
        </section>
      </>
    )
}

export default Link;
