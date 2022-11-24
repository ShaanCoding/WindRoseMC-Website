import React from "react";
import Container from "./container";

interface IStaffList {
  staffImage: any;
  staffName: string;
  staffTitle: string;
}

import shaanCodingImage from "../../../images/staff/ShaanCoding.png";
import officerLynxerImage from "../../../images/staff/OfficerLynxer.png";
import tomDill2883Image from "../../../images/staff/TomDill2883.png";

import SkHologramImage from "../../../images/staff/SkHologram.png";

import AnimePlayz from "../../../images/staff/AnimePlayz.png";
import Floppydafish from "../../../images/staff/Floppydafish.png";
import HellGhost from "../../../images/staff/HellGhost.png";

const ownerList: Array<IStaffList> = [
  {
    staffImage: shaanCodingImage.src,
    staffName: "ShaanCoding",
    staffTitle: "Owner",
  },
  {
    staffImage: officerLynxerImage.src,
    staffName: "OfficerLynxer",
    staffTitle: "Owner",
  },
];

const seniorStaffList: Array<IStaffList> = [
  {
    staffImage: SkHologramImage.src,
    staffName: "SkHologram",
    staffTitle: "Senior Staff",
  },
];

const juniorStaffList: Array<IStaffList> = [
  {
    staffImage: AnimePlayz.src,
    staffName: "AnimePlayz",
    staffTitle: "Junior Staff",
  },
  {
    staffImage: Floppydafish.src,
    staffName: "Floppydafish",
    staffTitle: "Junior Staff",
  },
  {
    staffImage: HellGhost.src,
    staffName: "HellGhost",
    staffTitle: "Junior Staff",
  },
];

const builderList: Array<IStaffList> = [
  {
    staffImage: tomDill2883Image.src,
    staffName: "TomDill2883",
    staffTitle: "Builder",
  },
];

const StaffList = () => {
  return (
    <Container>
      <h1 className="text-red-100 font-bold text-2xl mb-4 text-center">
        Our Staff
      </h1>

      <StaffRow staffArray={ownerList} title="Owner" />
      <StaffRow staffArray={seniorStaffList} title="Senior Staff" />
      <StaffRow staffArray={juniorStaffList} title="Junior Staff" />
      <StaffRow staffArray={builderList} title="Builder" />
    </Container>
  );
};

const StaffRow: React.FC<{ staffArray: Array<IStaffList>; title: string }> = ({
  staffArray,
  title,
}) => {
  return (
    <>
      <div className="bg-primary-background p-4 mb-4">
        <h1 className="text-red-100 text-lg font-semibold">{title}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {staffArray.map((staff: IStaffList, index: number) => (
          <StaffBlock
            staffImage={staff.staffImage}
            staffName={staff.staffName}
            staffTitle={staff.staffTitle}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

const StaffBlock: React.FC<{
  staffImage: any;
  staffName: string;
  staffTitle: string;
}> = ({ staffImage, staffName, staffTitle }) => {
  return (
    <div className="bg-gray-100 p-4 flex items-center justify-start">
      <div>
        <img src={staffImage} alt={staffName} className="w-12 h-12 mr-4" />
      </div>
      <div>
        <h1 className="text-red-100 text-sm font-semibold break-words">
          {staffName}
        </h1>
        <h1 className="text-white-100 text-sm break-word">{staffTitle}</h1>
      </div>
    </div>
  );
};

export default StaffList;
