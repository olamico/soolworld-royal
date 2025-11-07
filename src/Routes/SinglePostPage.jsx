import { Link } from "react-router-dom";
import Image from "../Components/Image";
import Search from "../Components/Search";
import PostMenuAction from "../Components/PostMenuAction";
import Comments from "../Components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8">
          <div className="lg:w-2/5 flex flex-col gap-8">
            <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing eli. Natus qui
            </h1>
          </div>
          <div className="flex item-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link>Jean joe</Link>
            <span>on</span>
            <Link>Web design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            quidem, quibusdam laudantium perspiciatis ut adipisci veniam cumque
            distinctio! Deleniti alias repellat cum consectetur praesentium
            consequatur sed totam ea sit consequuntur!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src="TOUCH-OIL.jpg"
            alt="TOUCH-OIL.jpg"
            className="rounded-2xl"
          />
        </div>
      </div>
      {/*Content*/}
      <div className="flex flex-col md:flex-row gap-8">
        {/*text*/}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque nisi quia necessitatibus harum nostrum provident.
            Facilis odio alias quisquam fugit nisi veritatis hic ratione minima
            in. Voluptas quae ab animi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis cumque consectetur asperiores laborum
            eaque consequuntur hic quaerat. Vel possimus dolorem, atque dicta,
            facilis aperiam cumque maiores, fugit voluptates accusantium a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            similique officiis inventore! Laudantium perferendis ratione, fugit
            animi at quidem et quas laborum molestiae, ad magnam, officia sit
            fugiat aliquam repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque nisi quia necessitatibus harum nostrum
            provident. Facilis odio alias quisquam fugit nisi veritatis hic
            ratione minima in. Voluptas quae ab animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque nisi quia necessitatibus harum nostrum provident.
            Facilis odio alias quisquam fugit nisi veritatis hic ratione minima
            in. Voluptas quae ab animi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis cumque consectetur asperiores laborum
            eaque consequuntur hic quaerat. Vel possimus dolorem, atque dicta,
            facilis aperiam cumque maiores, fugit voluptates accusantium a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            similique officiis inventore! Laudantium perferendis ratione, fugit
            animi at quidem et quas laborum molestiae, ad magnam, officia sit
            fugiat aliquam repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque nisi quia necessitatibus harum nostrum
            provident. Facilis odio alias quisquam fugit nisi veritatis hic
            ratione minima in. Voluptas quae ab animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque nisi quia necessitatibus harum nostrum provident.
            Facilis odio alias quisquam fugit nisi veritatis hic ratione minima
            in. Voluptas quae ab animi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis cumque consectetur asperiores laborum
            eaque consequuntur hic quaerat. Vel possimus dolorem, atque dicta,
            facilis aperiam cumque maiores, fugit voluptates accusantium a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            similique officiis inventore! Laudantium perferendis ratione, fugit
            animi at quidem et quas laborum molestiae, ad magnam, officia sit
            fugiat aliquam repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque nisi quia necessitatibus harum nostrum
            provident. Facilis odio alias quisquam fugit nisi veritatis hic
            ratione minima in. Voluptas quae ab animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque nisi quia necessitatibus harum nostrum provident.
            Facilis odio alias quisquam fugit nisi veritatis hic ratione minima
            in. Voluptas quae ab animi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis cumque consectetur asperiores laborum
            eaque consequuntur hic quaerat. Vel possimus dolorem, atque dicta,
            facilis aperiam cumque maiores, fugit voluptates accusantium a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            similique officiis inventore! Laudantium perferendis ratione, fugit
            animi at quidem et quas laborum molestiae, ad magnam, officia sit
            fugiat aliquam repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque nisi quia necessitatibus harum nostrum
            provident. Facilis odio alias quisquam fugit nisi veritatis hic
            ratione minima in. Voluptas quae ab animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque consectetur asperiores laborum eaque
            consequuntur hic quaerat. Vel possimus dolorem, atque dicta, facilis
            aperiam cumque maiores, fugit voluptates accusantium a? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo similique officiis
            inventore! Laudantium perferendis ratione, fugit animi at quidem et
            quas laborum molestiae, ad magnam, officia sit fugiat aliquam
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque nisi quia necessitatibus harum nostrum provident.
            Facilis odio alias quisquam fugit nisi veritatis hic ratione minima
            in. Voluptas quae ab animi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis cumque consectetur asperiores laborum
            eaque consequuntur hic quaerat. Vel possimus dolorem, atque dicta,
            facilis aperiam cumque maiores, fugit voluptates accusantium a?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            similique officiis inventore! Laudantium perferendis ratione, fugit
            animi at quidem et quas laborum molestiae, ad magnam, officia sit
            fugiat aliquam repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque nisi quia necessitatibus harum nostrum
            provident. Facilis odio alias quisquam fugit nisi veritatis hic
            ratione minima in. Voluptas quae ab animi?
          </p>
        </div>
        {/*Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mt-8 mb-4 text-sm font-medium"> Author</h1>
          <div className="">
            <Image
              urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
              src="userImg.jpeg"
              alt="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
            />
            <Link> Olusola</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <div className="flex gap-2">
              <div>
                <Link>
                  <Image
                    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                    src="facebook.svg"
                    alt="facebook.svg"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </Link>
              </div>
              <div>
                <Link>
                  <Image
                    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                    src="instagram.svg"
                    alt="instagram.svg"
                    className="w-12 h-12
                  rounded-full object-cover"
                  />
                </Link>
              </div>
            </div>
            <PostMenuAction />
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-small">
              <Link className="underline">All</Link>
              <Link className="underline" to="/">
                Perfume
              </Link>
              <Link className="underline" to="/">
                Spray
              </Link>
              <Link className="underline" to="/">
                Roll on
              </Link>
              <Link className="underline" to="/">
                Majestic Oud
              </Link>
              <Link className="underline" to="/">
                Perfume oil
              </Link>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>

            <Search />
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
