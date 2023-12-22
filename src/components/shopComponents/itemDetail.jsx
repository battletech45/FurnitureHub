import React, { useState, useEffect } from "react";
import Link from "next/link";
import arrow from "../../../public/assets/arrowImage.svg";
import fullStar from "../../../public/assets/fullStar.svg";
import halfStar from "../../../public/assets/halfStar.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import ColorSelector from "./colorSelector";
import SizeChoise from "./sizeChoise";
import ItemSku from "./itemSku";
import ItemCart from "./itemCart";
import Navbar from "../navbar";
import HeroBanner from "../banner";
import Banner from "../authComponents/authBanner/authBanner";
import Footer from "../authComponents/authFooter/authFooter";

const ItemDetail = ({itemID}) => {
  const [product, setProduct] = useState({});

  const items = [
    {
      id: 0,
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
    },
    {
      id: 1,
      title: "Hudson sectional sofa",
      price: "Rs. 28,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
    },
    {
      id: 2,
      title: "Aria leather couch",
      price: "Rs. 32,000.00",
      imageUrl:
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
    },
    {
      id: 3,
      title: "Savannah fabric sofa",
      price: "Rs. 22,800.00",
      imageUrl:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
    },
    {
      id: 4,
      title: "Harmony modular sectional",
      price: "Rs. 35,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
    },
    {
      id: 5,
      title: "Elliot corner sofa",
      price: "Rs. 27,900.00",
      imageUrl:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
    },
    {
      id: 6,
      title: "Grace velvet loveseat",
      price: "Rs. 26,200.00",
      imageUrl:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
    },
    {
      id: 7,
      title: "Logan three-seater sofa",
      price: "Rs. 30,400.00",
      imageUrl:
        "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
    },
    {
      id: 8,
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
    },
    {
      id: 9,
      title: "Hudson sectional sofa",
      price: "Rs. 28,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
    },
    {
      id: 10,
      title: "Aria leather couch",
      price: "Rs. 32,000.00",
      imageUrl:
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
    },
    {
      id: 11,
      title: "Savannah fabric sofa",
      price: "Rs. 22,800.00",
      imageUrl:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
    },
    {
      id: 12,
      title: "Harmony modular sectional",
      price: "Rs. 35,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
    },
    {
      id: 13,
      title: "Elliot corner sofa",
      price: "Rs. 27,900.00",
      imageUrl:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
    },
    {
      id: 14,
      title: "Grace velvet loveseat",
      price: "Rs. 26,200.00",
      imageUrl:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
    },
    {
      id: 15,
      title: "Logan three-seater sofa",
      price: "Rs. 30,400.00",
      imageUrl:
        "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
    },
    {
      id: 16,
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
    },
    {
      id: 17,
      title: "Hudson sectional sofa",
      price: "Rs. 28,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
    },
    {
      id: 18,
      title: "Aria leather couch",
      price: "Rs. 32,000.00",
      imageUrl:
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
    },
    {
      id: 19,
      title: "Savannah fabric sofa",
      price: "Rs. 22,800.00",
      imageUrl:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
    },
    {
      id: 20,
      title: "Harmony modular sectional",
      price: "Rs. 35,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
    },
    {
      id: 21,
      title: "Elliot corner sofa",
      price: "Rs. 27,900.00",
      imageUrl:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
    },
    {
      id: 22,
      title: "Grace velvet loveseat",
      price: "Rs. 26,200.00",
      imageUrl:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
    },
    {
      id: 23,
      title: "Logan three-seater sofa",
      price: "Rs. 30,400.00",
      imageUrl:
        "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
    },
    {
      id: 24,
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg&w=1920&h=1234&_gl=1*1jov2ta*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzA5My4wLjAuMA..",
    },
    {
      id: 25,
      title: "Hudson sectional sofa",
      price: "Rs. 28,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-1350789.jpg&fm=jpg&w=1920&h=1228&_gl=1*sbbnkl*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI0NC4wLjAuMA..",
    },
    {
      id: 26,
      title: "Aria leather couch",
      price: "Rs. 32,000.00",
      imageUrl:
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?cs=srgb&dl=pexels-atbo-245208.jpg&fm=jpg&w=1920&h=1387&_gl=1*4q8fd6*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI3NS4wLjAuMA..",
    },
    {
      id: 27,
      title: "Savannah fabric sofa",
      price: "Rs. 22,800.00",
      imageUrl:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg&w=1920&h=1251&_gl=1*10tviyb*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzI5OC4wLjAuMA..",
    },
    {
      id: 28,
      title: "Harmony modular sectional",
      price: "Rs. 35,500.00",
      imageUrl:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?cs=srgb&dl=pexels-martin-péchy-1866149.jpg&fm=jpg&w=1920&h=1440&_gl=1*cbx39x*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM0OC4wLjAuMA..",
    },
    {
      id: 29,
      title: "Elliot corner sofa",
      price: "Rs. 27,900.00",
      imageUrl:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?cs=srgb&dl=pexels-evg-kowalievska-1148955.jpg&fm=jpg&w=1920&h=2880&_gl=1*1qy0cb9*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM2OS4wLjAuMA..",
    },
    {
      id: 30,
      title: "Grace velvet loveseat",
      price: "Rs. 26,200.00",
      imageUrl:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?cs=srgb&dl=pexels-pixabay-276528.jpg&fm=jpg&w=1920&h=1280&_gl=1*1ld8far*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzM5NC4wLjAuMA..",
    },
    {
      id: 31,
      title: "Logan three-seater sofa",
      price: "Rs. 30,400.00",
      imageUrl:
        "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?cs=srgb&dl=pexels-steve-johnson-923192.jpg&fm=jpg&w=1920&h=1321&_gl=1*34ol9l*_ga*MjA3Nzc1NTUwLjE3MDE3ODcwODY.*_ga_8JE65Q40S6*MTcwMTc4NzA4Ni4xLjEuMTcwMTc4NzQyNS4wLjAuMA..",
    },
  ];
  
  useEffect(() => {
    const product = items[itemID];
    setProduct(product);
  }, [itemID]);

  return (
    <div className="bg-white flex flex-col">
      <Navbar bgColor={"white"} />
      <div className="flex items-center gap-2 text-base mb-5 ml-4 bg-white">
        <Link href={"/"}>Home</Link>
        <img src={arrow} alt="arrow" />
        <Link href={"/shop"}>Shop</Link>
        <img src={arrow} alt="arrow" />
        <div className="ml-2 h-8 border border-[#9F9F9F]" />
        <p className="text-black text-base font-normal">{product.title}</p>
      </div>
      <section className="flex p-5">
        <div className="flex flex-col gap-8 mr-8">
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
          <img src={product.imageUrl} alt="smallPhotos" />
        </div>
        <aside className=" flex-1">
          <img className="w-full h-[600px]" src={product.imageUrl} alt="Item" />
        </aside>
        <aside className="flex-1 pl-5 h-min box-border">
          <h2 className="text-black text-4xl font-normal">{product.title}</h2>
          <span className=" h-min flex items-center gap-52">
            <h4 className="text-[#9F9F9F] text-2xl font-medium">{product.price}</h4>
            <IoMdHeartEmpty color="red" size={25} />
          </span>
          <span className="items-center flex">
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={fullStar} alt="star" />
            <img src={halfStar} alt="star" />
            <div className="ml-2 h-8 border border-[#9F9F9F]" />
            <h5 className="text-[#9F9F9F] font-normal text-sm">
              5 Customer Review
            </h5>
          </span>
          <p className="text-black text-sm font-normal">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h5>Size</h5>
          <SizeChoise />
          <h5>Color</h5>
          <ColorSelector />
          <ItemCart />
          <div className=" w-11/12 mt-16 border" />
          <ItemSku />
        </aside>
      </section>
      <Banner />
      <Footer />
      <div className="flex flex-col items-center">
        <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
        <div className="justify-start items-start flex w-9/12 pl-24">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;