import { Icon } from "@iconify/react";
export default function Header() {
  return (
    <>
      <header className="mx-4 my-4 rounded-sm flex justify-between w-11/12 fixed">
        <input type="text" className="lg:ml-64" placeholder={"Search"} />
        <div className="flex justify-between">
          <div>
            <Icon icon="tabler:bell" />
            {/* <Icon icon="mdi-light:home" />
            <Icon icon="mdi:account" />
            <Icon icon="tabler:bell" />
            <Icon icon="fa-solid:coffee" />
            <Icon icon="fa-regular:envelope" />
            <Icon icon="bi:heart" />
            <Icon icon="heroicons-outline:star" />
            <Icon icon="carbon:settings" />
            <Icon icon="fluent:alarm-24-filled" />
            <Icon icon="ic:baseline-accessibility" />
            <Icon icon="logos:github" />
            <Icon icon="eva:checkmark-circle-2-fill" />
            <Icon icon="akar-icons:circle-alert" />
            <Icon icon="icon-park-outline:add-user" />
            <Icon icon="simple-icons:stackoverflow" /> */}
          </div>
          <div className="flex flex-col mr-2">
            <div className="text-base">Mamadou Ba</div>
            <div className="text-xs">Etudiant</div>
          </div>
          <div className=" bg-black w-10 h-10 rounded-2xl "></div>
        </div>
      </header>
    </>
  );
}
