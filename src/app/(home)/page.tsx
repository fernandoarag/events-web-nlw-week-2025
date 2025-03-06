'use server'

import ellipse from '@/assets/ellipse.png'
import line_bg_short from '@/assets/line_bg_short.png'
import line_video from '@/assets/line_video.png'
import logo_ipsum_1 from '@/assets/logo_ipsum_001.png'
import logo_ipsum_2 from '@/assets/logo_ipsum_002.png'
import logo_ipsum_3 from '@/assets/logo_ipsum_003.png'
import logo_ipsum_4 from '@/assets/logo_ipsum_004.png'
import logo_ipsum_5 from '@/assets/logo_ipsum_005.png'
import logo_ipsum_6 from '@/assets/logo_ipsum_006.png'
import star from '@/assets/star.svg'
import passion_for_digital_transformation from '@/assets/transformacao-digital.webp'
import transformation_card_bottom from '@/assets/transformation_card_bottom.png'
import transformation_card_left2 from '@/assets/transformation_card_left-2.png'
import transformation_card_left from '@/assets/transformation_card_left.png'
import transformation_card_right from '@/assets/transformation_card_right.png'
import { Button } from '@/components/ui/button'
import VideoPlayer from '@/components/ui/video-player'
import { Presentation, Text } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="min-h-[calc(100dvh-144px)] flex flex-col justify-center">
      <section className="section">
        <div className="container grid grid-cols-2 gap-[15rem] h-[450px] ">
          <div className="flex flex-col justify-center gap-6 w-full h-full z-10">
            <h1 className="text-4xl md:text-6xl leading-none font-heading-variant">
              <span className="text-blue font-semibold">
                Unlock Your Event's
              </span>{' '}
              <br />
              <span>Potential Online</span>
            </h1>

            <p className="text-base">
              Viverra enim donec sed commodo sagittis facilisis donec elit
              pulvinar. Phasellus morbi vitae aliquet gravida luctus id
              dictumst. Cursus est at amet sed facilisi. Cursus ut pulvinar in
              tempus. Interdum velit odio fermentum semper penatibus nunc.
            </p>

            <Link
              href="/events"
              className="max-w-[300px] text-center text-white uppercase font-semibold text-base bg-blue-600/50 border-1 border-blue-600/20 py-4 px-10 rounded-full transition-all duration-300 hover:bg-blue-600"
            >
              Go to Events
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 z-2">
            <div className="group flex flex-row items-center justify-center rounded-full bg-gray-950/80 h-[100px] w-2/3 transition-all duration-200 hover:bg-gray-950/100 hover:shadow-xl shadow-blue-600/10 border border-white hover:border-blue-600">
              <span className="uppercase font-semibold text-xl font-heading group-hover:text-blue-600 transition-all duration-200">
                Greater Visibility
              </span>
            </div>
            <div className="flex flex-row items-center justify-start gap-10 w-full">
              <div className="group flex flex-row items-center justify-center rounded-full bg-gray-950/80 h-[100px] w-full transition-all duration-200 hover:bg-gray-950/100 hover:shadow-xl shadow-blue-600/10 border border-white hover:border-blue-600">
                <span className="uppercase font-semibold text-xl font-heading group-hover:text-blue-600 transition-all duration-200">
                  Increased lead capture
                </span>
              </div>

              <div className="group relative bg-blue-600/40 hover:shadow-xl hover:border-blue-600 hover:bg-blue-300/100 border-1 shadow-blue-600/10 rounded-full transition-all duration-200 p-6">
                <Presentation
                  size={70}
                  className="transition-all duration-200 group-hover:scale-105 group-hover:text-blue-600"
                />
                <Text
                  size={35}
                  className="absolute top-[34px] left-[40px] transition-all duration-200 group-hover:text-blue-600"
                />
              </div>
            </div>
            <div className="group flex flex-row items-center justify-center rounded-full bg-gray-950/80 h-[100px] w-2/3 transition-all duration-200 hover:bg-gray-950/100 hover:shadow-xl shadow-blue-600/10 border border-white hover:border-blue-600">
              <span className="uppercase font-semibold text-xl font-heading group-hover:text-blue-600 transition-all duration-200">
                Low Investment
              </span>
            </div>
          </div>
        </div>

        <Image
          src={line_bg_short}
          alt="Background top right image"
          className="absolute top-[-88px] right-0 z-[-1] max-h-[730px]"
        />
      </section>

      <section className="relative flex flex-row items-center justify-center gap-4 bg-gray-900 py-10 z-10">
        <div className="absolute block top-0 mx-auto w-[95vw] border-white/5 border-t-1">
          {' '}
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <span>Award-Winning Strategies</span>
          <Image src={star} alt="star icon" width={20} height={20} />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <span>1,000+ Successful Campaigns Delivered</span>
          <Image src={star} alt="star icon" width={20} height={20} />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <span>98% Client Satisfaction Rate</span>
        </div>
        <div className="absolute block bottom-0 mx-auto w-[95vw] border-white/5 border-t-1">
          {' '}
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-[700px_1fr] justify-center items-stretch gap-32 h-[500px]">
          <div className="relative w-[700px] h-[500px] flex flex-row items-center justify-center z-10">
            <div className="relative h-[480px] w-[400px]">
              <Image
                src={transformation_card_left}
                alt="transformation_card_left"
                className="absolute top-0 left-0 z-1 max-h-[480px] max-w-[400px]"
              />
              <Image
                src={transformation_card_left2}
                alt="transformation_card_left2"
                className="absolute top-0 left-0 z-2 max-h-[480px] max-w-[400px]"
              />
              <div className="block w-[330px] h-[375px] bg-gray-450 absolute top-[45px] left-[45px] rounded-2xl overflow-hidden border border-blue-600/25 z-3">
                <Image
                  src={passion_for_digital_transformation}
                  alt="star icon"
                  className="h-full object-cover object-center"
                />
              </div>
              <Image
                src={transformation_card_right}
                alt="transformation_card_right"
                className="absolute top-0 right-0 z-4 max-h-[480px] max-w-[400px]"
              />
              <Image
                src={transformation_card_bottom}
                alt="transformation_card_bottom"
                className="absolute bottom-0 left-0 z-2 max-h-[480px] max-w-[400px]"
              />
            </div>

            <Image
              src={ellipse}
              alt="ellipse"
              className="absolute top-0 left-0 z-[-1] w-[700px] h-[500px]"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-6">
            <span className="flex flex-row items-center justify-start gap-2">
              <div className="block w-5 bg-blue-600 h-2 rounded-full"> </div>
              About Us
            </span>
            <h2 className="font-heading-variant text-5xl">
              Passion for Digital Transformation
            </h2>
            <p className="text-gray-300">
              Orci at id enim eu pellentesque habitant. Ut at diam suscipit amet
              id cursus id blandit. Consectetur maecenas id vivamus integer
              integer aliquam. Donec amet rhoncus ut turpis massa augue
              faucibus.
            </p>

            <div className="w-full">
              <hr className="border-white/5" />
              <div className="relative flex flex-row items-center justify-between gap-6 space-x-10 pt-10 pb-10 w-full">
                <Image
                  src={logo_ipsum_1}
                  alt="logo_ipsum_1"
                  width={110}
                  className="m-0"
                />
                <Image
                  src={star}
                  alt="star icon"
                  width={15}
                  height={15}
                  className="m-0"
                />
                <Image
                  src={logo_ipsum_2}
                  alt="logo_ipsum_2"
                  width={110}
                  className="m-0"
                />
                <Image
                  src={star}
                  alt="star icon"
                  width={15}
                  height={15}
                  className="m-0"
                />
                <Image
                  src={logo_ipsum_3}
                  alt="logo_ipsum_3"
                  width={110}
                  className="m-0"
                />
              </div>

              <hr className="border-white/5" />

              <div className="relative flex flex-row items-center justify-between gap-6 space-x-10 pt-10 pb-10 w-full">
                <div className="absolute block top-0 mx-auto w-full border-white/5 border-t-1">
                  {' '}
                </div>
                <Image
                  src={logo_ipsum_4}
                  alt="logo_ipsum_4"
                  width={110}
                  className="m-0"
                />
                <Image
                  src={star}
                  alt="star icon"
                  width={15}
                  height={15}
                  className="m-0"
                />
                <Image
                  src={logo_ipsum_5}
                  alt="logo_ipsum_5"
                  width={110}
                  className="m-0"
                />
                <Image
                  src={star}
                  alt="star icon"
                  width={15}
                  height={15}
                  className="m-0"
                />
                <Image
                  src={logo_ipsum_6}
                  alt="logo_ipsum_6"
                  width={110}
                  className="m-0"
                />
              </div>

              <hr className="border-white/5" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <VideoPlayer
          src="/videos/big_buck_bunny_720p_surround.mp4"
          className="h-auto overflow-hidden flex flex-row items-center justify-center pt-7 pb-7 pl-10 pr-10 border-blue-600 border-1 rounded-4xl max-w-[1100px] mx-auto"
          classVideo="h-full w-full border-blue-600/15 border-1 rounded-2xl"
        />
        <Image
          src={line_video}
          alt="Background top right image"
          className="absolute top-[60px] left-0 z-[-1] max-h-[730px]"
        />
      </section>

      <section className="section">
        <div className="container flex flex-col gap-30">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="flex flex-row items-center justify-start gap-2">
              <div className="block w-5 bg-blue-600 h-2 rounded-full"> </div>{' '}
              Why Choose Us{' '}
              <div className="block w-5 bg-blue-600 h-2 rounded-full"> </div>
            </span>

            <h2 className="font-heading-variant text-5xl w-2xl leading-15">
              Your Trusted Partner in Digital Success
            </h2>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 items-center gap-y-20 gap-x-8 justify-center">
            {[...Array(6)].map((_, index) => (
              <div
                className="relative pt-10 bg-gray-800/50 rounded-2xl transition-all duration-200 border border-blue-600/5 hover:bg-gray-800"
                key={index}
              >
                <div className="absolute -top-12.5 left-[calc(50%-50px)] bg-white rounded-full w-25 h-25 flex items-center justify-center">
                  <Image
                    src={star}
                    alt="star icon"
                    width={40}
                    height={40}
                    className="m-0"
                  />
                </div>

                <div className="flex flex-col gap-4 items-center justify-center text-center pt-12.5 pl-10 pr-10 pb-10">
                  <h3 className="font-heading-variant text-xl font-semibold">
                    Proven Expertise
                  </h3>
                  <p className="text-gray-300 text-base font-normal font-sans">
                    Orci at id enim eu pellentesque habitant. Ut at diam
                    suscipit amet id cursus id blandit. Consectetur maecenas id
                    vivamus integer integer aliquam. Donec amet rhoncus ut
                    turpis massa augue faucibus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container flex flex-col items-center justify-center gap-15">
          <h2 className="font-heading-variant text-7xl font-semibold text-linear-layout">
            Results Stats.
          </h2>

          <div className="flex flex-row items-center justify-center flex-wrap gap-5">
            {[...Array(3)].map((_, index) => (
              <div
                className="flex flex-col items-center justify-center gap-6 flex-1/3 border-1 border-blue-600/10 transition-all duration-300 px-30 py-10 rounded-2xl mr-2.5 hover:bg-gray-800 hover:border-gray-900"
                key={index}
              >
                <span className="font-semibold text-6xl">
                  1,200<span className="text-blue-600 font-normal">+</span>
                </span>
                <h4 className="font-heading-variant text-4xl">Happy Clients</h4>
                <p className="font-normal text-base text-gray-300 text-center w-85">
                  Number of satisfied clients who have benefited from our
                  services.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
