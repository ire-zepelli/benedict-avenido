import React, { Children } from "react";
import logo from "/uclm-logo.jpg";
import InfoCard from "./InfoCard";

export default function Achievements() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-2xl font-semibold">Achievements</h2>
      <InfoCard
        logo={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpf5Cvqe411yzPxCF_THTzq8ihLljF1d27A&s"
        }
        title={"CESAFI: Computer Quiz Bowl (College Division)"}
        subtitle={"2nd Placer"}
        date={"March 2025"}
      />
      <InfoCard
        logo={
          "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/492006679_122176782752321781_5932475837739359282_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEASfqf6VYzIElJzNQBeoapdS56iCmKiDx1LnqIKYqIPGVdV_5wuqo5JjiJ74ZelvVukGrODXJEyGalVlo4C_Do&_nc_ohc=TWGcMWhpj4gQ7kNvwF9fdql&_nc_oc=AdmguuM0nNUsZ9enp4NjwbE59gj3BZsAdwCPB8vI0rWxIJ_-DnRrdjswo4wadDfM4ZM&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=u1Rkjcd2TkXlaXz8q8hemg&oh=00_AfQISM54cZhJSku-Q2Q29cdcR0X6chX4uy7rrbESbyPTrg&oe=6873A504"
        }
        title="11th ICT Congress: JAVA Programming Competition"
        subtitle={"1st Placer"}
        date={"April 2025"}
      />
      <InfoCard
        logo={logo}
        title={"College Days: JAVA Programming Competition"}
        subtitle={"Champion"}
        date={"Feb 2025"}
      />
      <InfoCard
        logo={
          "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/279486570_404919568307852_7716863524961354660_n.png?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5wjksAj9BX1vBqb9y7ZIDfCTe7E7Ofkh8JN7sTs5-SD_zRqxzCGIkxqpDnHW9IAzSyp_lnZ4TvhYSIhdzbJOl&_nc_ohc=b7rPKjoLSYQQ7kNvwGsc9ic&_nc_oc=AdlLfvYPhwaaWGHmFu8bYoDC5qewxkjiWMTZWSNy87g7r7fxZv6-cBbv924yUQoy3tQZ_kSR981hF71mB5Sqgz0-&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=a06qurbZEbiZKkPxeIVesg&oh=00_AfSttYXGMriN7-WhaevhL1w4qnhpB56IXSLd3h4vTAV0Lg&oe=6873B92C"
        }
        title={"CCS Battle of the Brains Competition"}
        subtitle={"2nd Placer"}
        date={"April 2024"}
      />
    </div>
  );
}
