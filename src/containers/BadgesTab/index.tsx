import React, { useState } from "react";

import { useAppState } from "context/app.context";

import BadgeItem from "components/BadgeItem";
import Helmet from "react-helmet";

const BadgesTab = () => {
  const { themeColor, user } = useAppState();

  interface IBadge {
    name: string;
  }

  const myBadges: IBadge[] = [
    { name: "DK8" },
    { name: "HC3" },
    { name: "TC1" },
    { name: "Z05" },
    { name: "IT345" },
    { name: "IT347" },
    { name: "IT348" },
    { name: "IT349" },
    { name: "IT350" },
    { name: "IT351" },
    { name: "IT352" },
    { name: "IT353" },
    { name: "IT354" },
    { name: "IT355" },
    { name: "IT356" },
    { name: "IT357" },
    { name: "IT358" },
    { name: "IT359" },
    { name: "IT360" },
    { name: "IT361" },
    { name: "IT362" },
    { name: "IT363" }
  ];

  const [equippedBadges, setEquippedBadges] = useState<IBadge[]>([]);

  const handleBadgeClick = (badgeName: string): void => {
    // Remove badge from equipped badges if it's already equipped.
    if (equippedBadges.find(b => b.name === badgeName)) {
      setEquippedBadges(equippedBadges.filter(b => b.name !== badgeName));
      return;
    }

    // Return if all 5 slots are already used.
    if (equippedBadges.length >= 5) return;

    setEquippedBadges([...equippedBadges, { name: badgeName }]);
  };

  return (
    <div>
      <Helmet>
        <title>Badges</title>
      </Helmet>
      <div className="p-2">
        {/* Equipped badges */}
        <div className="">
          <div>
            <span className="text-gray-600 dark:text-gray-500 text-sm">
              You have collected{" "}
              <span
                className="font-bold text-2xl"
                style={{ color: themeColor }}
              >
                {myBadges.length}
              </span>{" "}
              badges!
            </span>
          </div>
          <div className="flex">
            <div
              className="rounded flex flex-col bg-gray-800 w-20 mr-2 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://www.habbo.nl/habbo-imaging/avatarimage?figure=${user?.look}&direction=4)`
              }}
            />
            <div className="grid grid-cols-2">
              {[...Array(5)].map((_, i) => (
                <div className={`m-px col-span-1 ${i === 0 && "col-span-2"}`}>
                  {equippedBadges[i] ? (
                    <BadgeItem
                      handleClick={() =>
                        handleBadgeClick(equippedBadges[i].name)
                      }
                      badge={equippedBadges[i]}
                    />
                  ) : (
                    <div className="dark:bg-gray-800 rounded w-12 h-12" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All badges */}
      <div className="w-full flex flex-wrap justify-center">
        {myBadges.map(badge => (
          <div className="m-1">
            <BadgeItem
              badge={badge}
              equipped={
                typeof equippedBadges.find(e => e.name === badge.name) !==
                "undefined"
              }
              handleClick={() => handleBadgeClick(badge.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesTab;
