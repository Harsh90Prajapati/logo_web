import { Parallax } from "react-parallax";
import Space from "../assets/img/pixel.svg";
import NavBar from "./NavBar";

const ImageOne = () => (
  <>
    <NavBar />
    <Parallax strength={200} bgImage={Space} className="">
      <div className="text-center">
        <h1 className="text-2xl text-white">Hey KYA R RDKSJFB</h1>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          necessitatibus voluptate numquam nesciunt error placeat nihil earum
          exercitationem voluptatum in esse, tempora modi dolore beatae
          expedita. Accusamus laudantium quod dignissimos?
        </p>
      </div>
    </Parallax>
  </>
);

export default ImageOne;
