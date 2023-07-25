import { Button } from "@/components/ui/button";
import * as SolidIcons from 'react-icons/hi';
import * as LineIcons from 'react-icons/pi';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between h-screen gap-4 bg-gradient-to-b from-violet-100 to-neutral-50 py-16 px-6 md:py-24 scrollable overflow-y-auto">
      <header className="flex w-full items-center justify-between px-4 py-3 shadow fixed z-50 top-0 bg-indigo-800 text-violet-50 cursor-pointer">
        <h1 className="text-2xl md:text-3xl font-bold hover:text-violet-300">Roomie</h1>
        <SolidIcons.HiBell className="w-6 h-6 md:w-8 md:h-8 hover:text-violet-300 _hover-settings"/>
      </header>
      {/* The Page Content */}
      <section className="flex">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sunt laudantium dolore perspiciatis, necessitatibus ullam atque tempora dignissimos explicabo blanditiis dolores, saepe, nulla laborum odit ea rerum amet magni. Cupiditate, asperiores quas! Magni omnis voluptas quo obcaecati nostrum facilis pariatur asperiores eius libero earum laboriosam voluptatem provident laborum ex aut deserunt atque, unde, distinctio incidunt nemo necessitatibus debitis explicabo? Vitae ipsam impedit, hic maxime voluptate ab aspernatur excepturi veniam at, ducimus nobis dicta. Quis labore voluptatem iusto temporibus iste aliquid sit consectetur alias atque repellendus molestias nostrum voluptate, aut dolore eligendi ipsam consequatur rerum. Mollitia numquam ab blanditiis animi adipisci fuga repellat, incidunt exercitationem recusandae earum sint quis similique tenetur, nesciunt quasi vitae ipsum dolorem iste qui voluptas? Deleniti necessitatibus laboriosam nobis fugit quaerat, repudiandae recusandae perferendis delectus placeat reprehenderit soluta repellat quo architecto saepe autem dignissimos! Eos perspiciatis ab quod molestiae, rem quis. Odio ex nihil facilis illo quaerat. Doloribus itaque suscipit nostrum sequi ipsa recusandae sed nemo impedit qui, voluptatibus accusamus dolorem optio aut quod! Natus corrupti nemo consectetur odio quia culpa laborum molestias dolorum magnam assumenda, explicabo voluptas fuga atque necessitatibus facere harum deserunt dicta aspernatur veniam cum officia animi! Veniam, porro ab iste est unde deleniti?
      </section>
      {/* The Bottom Nav */}
      <nav className="flex w-full justify-between items-center gap-2 md:gap-4 px-6 py-2 shadow fixed z-50 bottom-0 bg-indigo-50 text-neutral-500 cursor-pointer">
        <LineIcons.PiHouseBold className="w-8 h-8 md:w-8 md:h-8 hover:text-indigo-700 _hover-settings" />
        <LineIcons.PiChatCircleBold className="w-8 h-8 md:w-8 md:h-8 hover:text-indigo-700 _hover-settings" />
        <SolidIcons.HiPlusCircle className="w-12 h-12 md:w-14 md:h-14 text-indigo-800  hover:text-indigo-700 _hover-settings" />
        <LineIcons.PiMapPinLineBold className="w-8 h-8 md:w-8 md:h-8 hover:text-indigo-700 _hover-settings" />
        <LineIcons.PiUserBold className="w-8 h-8 md:w-8 md:h-8 hover:text-indigo-700 _hover-settings" />
</nav>
    </main>
  );
}
