"use client"

import Image from "next/legacy/image"
import Purpose from "./Purpose"

export default function Media(){
  return (
      <div>
          <div className="mx-10 text-black font-noto-sans ">
<h1 className="text-2xl pt-8">Instagram</h1>
<p className="text-lg tracking-tight font-nunito-sans">Follow us on @qodeinteractive</p>

          </div>
          <section className="my-6 flex lg:flex-nowrap h-full lg:flex-row flex-col justify-center flex-wrap gap-6">
<div className="col-span-1 lg:h-full h-36 ">
<Image
              className="relative "
              src="/div.qodef-e (0).png"
              alt="Apponovi Logo"
              width={200}
              height={600}
              priority
            />
</div>
<div className="col-span-2 lg:h-full h-36">
<Image
              className="relative "
              src="/div.qodef-e (1).png"
              alt="Apponovi Logo"
              width={500}
              height={600}
              priority
            />
</div>
<div className="col-span-2 lg:h-full h-36">
<Image
              className="relative "
              src="/div.qodef-e (2).png"
              alt="Apponovi Logo"
              width={500}
              height={600}
              priority
            />
</div>
<div className="col-span-2 ">
<Image
              className="relative "
              src="/div.qodef-e (3).png"
              alt="Apponovi Logo"
              width={500}
              height={600}
              priority
            />
</div>
<div className="col-span-2">
<Image
              className="relative "
              src="/div.qodef-e (4).png"
              alt="Apponovi Logo"
              width={500}
              height={600}
              priority
            />
</div>
<div className="col-span-2">
<Image
              className="relative "
              src="/div.qodef-e (5).png"
              alt="Apponovi Logo"
              width={500}
              height={600}
              priority
            />
</div>
<div className="col-span-1">
<Image
              className="relative "
              src="/div.qodef-e (6).png"
              alt="Apponovi Logo"
              width={200}
              height={600}
              priority
            />
</div>
</section>
<section className="my-6">
<Purpose />
</section>
      </div>
  )
}