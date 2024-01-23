import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const Franchise = localFont({
  src: "../public/fonts/Franchise-Free-Bold.ttf",
  display: "swap",
});

export default function Testimonials() {
  return (
    <section className="mt-8 bg-[#181823] text-[#f6f1f1]">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1
          className={`${Franchise.className} p-4 text-8xl font-semibold leadi text-center text-[#00b5e7]`}
        >
          what customers are saying about me
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {/* box 1 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Working with Seif Eldin Sameh has been an absolute pleasure. His
              expertise as a Full Stack Web Developer is evident in the seamless
              and efficient solutions he provides. Seif is not only highly
              skilled in his craft but also possesses excellent communication
              and collaboration skills. His dedication to delivering
              high-quality work makes him an invaluable asset to any project.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] text-gray-900">
            <p className="text-xl font-semibold leadi">Ali Nasr</p>
            <p className="text-sm uppercase">CEO of ENGGAM</p>
          </div>
        </div>
        {/* box 2 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I had the privilege of collaborating with Seif Eldin Sameh on a
              complex web development project, and I am truly impressed by his
              technical prowess and commitment to excellence. Seif&apos;s Full
              Stack expertise is second to none, and he consistently
              demonstrated a deep understanding of the latest technologies. I
              highly recommend Seif for any web development endeavor.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] text-gray-900">
            <p className="text-xl font-semibold leadi">Sameh Mohamed</p>
            <p className="text-sm uppercase">CEO of Final Touch</p>
          </div>
        </div>
        {/* box 3 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Seif Eldin Sameh is a standout Full Stack Web Developer with a
              rare combination of technical proficiency and creative
              problem-solving abilities. I had the pleasure of working with Seif
              on a time-sensitive project, and his dedication to meeting
              deadlines without compromising quality was commendable. I
              wholeheartedly endorse Seif for his exceptional skills and
              professionalism.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] text-gray-900">
            <p className="text-xl font-semibold leadi">Mohamed Reda</p>
            <p className="text-sm uppercase">CEO of Golden Hornet</p>
          </div>
        </div>
        {/* box 4 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I cannot speak highly enough about Seif Eldin Sameh&apos;s Full
              Stack Web Development capabilities. Seif&apos;s attention to
              detail and commitment to delivering outstanding results make him a
              top-tier professional in his field. His ability to navigate and
              overcome challenges sets him apart, and I am confident in
              recommending Seif to anyone seeking a reliable and skilled web
              developer.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] dark:text-gray-900">
            <p className="text-xl font-semibold leadi">Mr. Basem</p>
            <p className="text-sm uppercase">CEO of Exception Designs</p>
          </div>
        </div>
        {/* box 5 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              اجمد مينتور جه ل ستيودنت اكتيفيتى فى العبور
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] dark:text-gray-900">
            <p className="text-xl font-semibold leadi">Omar Ehab</p>
            <p className="text-sm uppercase">CS Student Shrouk Academy</p>
          </div>
        </div>
        {/* box 6 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Seif sameh is a person who is meticulous in his process and
              deadlines, and does his work in the fastest time ، Moreover, He is
              an excellent partner, a loyal work friend, and he is the heart of
              his Brother🤍
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] dark:text-gray-900">
            <p className="text-xl font-semibold leadi">Ahmed Osama</p>
            <p className="text-sm uppercase">
              Hardware and electrical lead in OI ROV
            </p>
          </div>
        </div>
        {/* box 7 */}
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-[#00b5e7]"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              Seif Eldin Sameh is an exceptional Full Stack Web Developer who
              consistently exceeds expectations. His technical acumen, combined
              with a keen eye for detail, results in web solutions that are not
              only functional but also aesthetically pleasing. Seif&apos;s
              dedication to staying abreast of industry trends ensures that his
              work is always at the forefront of innovation.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-[#00b5e7]"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#00b5e7] dark:text-gray-900">
            <p className="text-xl font-semibold leadi">Soo Eldek</p>
            <p className="text-sm uppercase">
              Working in the field of currency trading
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
