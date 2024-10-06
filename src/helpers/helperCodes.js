import { ReactComponent as ClearDay } from "../imgs/weather_icons/clear_sky_day.svg";
import { ReactComponent as ClearNight } from "../imgs/weather_icons/clear_sky_night.svg";
import { ReactComponent as MainlyClearDay } from "../imgs/weather_icons/mainly_clear_day_1.svg";
import { ReactComponent as MainlyCleaNight } from "../imgs/weather_icons/mainly_clear_night_1.svg";
import { ReactComponent as PartlyCloudyDay } from "../imgs/weather_icons/partly_cloudy_day_1.svg";
import { ReactComponent as PartlyCloudyNight } from "../imgs/weather_icons/partly_cloudy_night_1.svg";
import { ReactComponent as OvercastDay } from "../imgs/weather_icons/overcast_day_1.svg";
import { ReactComponent as OvercastNight } from "../imgs/weather_icons/overcast_night_1.svg";
import { ReactComponent as Fog } from "../imgs/weather_icons/fog.svg";
import { ReactComponent as DepositingRimeFog } from "../imgs/weather_icons/depositing_rime_fog.svg";
import { ReactComponent as LightDrizzleDay } from "../imgs/weather_icons/light_drizzle_day.svg";
import { ReactComponent as LightDrizzleNight } from "../imgs/weather_icons/light_drizzle_night.svg";
import { ReactComponent as ModerateDrizzleDay } from "../imgs/weather_icons/moderate_drizzle_day.svg";
import { ReactComponent as ModerateDrizzleNight } from "../imgs/weather_icons/moderate_drizzle_night.svg";
import { ReactComponent as DenseDrizzelDay } from "../imgs/weather_icons/dense_drizzle_day.svg";
import { ReactComponent as DenseDrizzleNight } from "../imgs/weather_icons/dense_drizzle_night_1.svg";
import { ReactComponent as FreezingLightDrizzelDay } from "../imgs/weather_icons/freezing_light_drizzle_day.svg";
import { ReactComponent as FreezingLightDrizzleNight } from "../imgs/weather_icons/freezing_light_drizzle_night.svg";
import { ReactComponent as FreezingDenseDrizzelDay } from "../imgs/weather_icons/freezing_dense_drizzle_day.svg";
import { ReactComponent as FreezingDenseDrizzleNight } from "../imgs/weather_icons/freezing_dense_drizzle_night.svg";
import { ReactComponent as SlightRainDay } from "../imgs/weather_icons/rain_slight_day.svg";
import { ReactComponent as SlightRainNight } from "../imgs/weather_icons/rain_slight_night.svg";
import { ReactComponent as ModerateRainDay } from "../imgs/weather_icons/rain_moderate_day.svg";
import { ReactComponent as ModerateRainNight } from "../imgs/weather_icons/rain_moderate_night.svg";
import { ReactComponent as HeavyRain } from "../imgs/weather_icons/rain_heavy.svg";
import { ReactComponent as FreezingLightRainDay } from "../imgs/weather_icons/freezing_light_rain_day.svg";
import { ReactComponent as FreezingLightRainNight } from "../imgs/weather_icons/freezing_light_rain_night.svg";
import { ReactComponent as FreezingHeavyRainDay } from "../imgs/weather_icons/freezing_heavy_rain_day.svg";
import { ReactComponent as FreezingHeavyRainNight } from "../imgs/weather_icons/freezing_heavy_rain_night.svg";
import { ReactComponent as SnowSlight } from "../imgs/weather_icons/snow_showers_light.svg";
import { ReactComponent as SnowModerate } from "../imgs/weather_icons/snow_showers_moderate.svg";
import { ReactComponent as SnowHeavy } from "../imgs/weather_icons/snow_showers_heavy.svg";
import { ReactComponent as SnowGrains } from "../imgs/weather_icons/snow_grains.svg";
import { ReactComponent as ThunderstormsLight } from "../imgs/weather_icons/thuderstorms_light.svg";
import { ReactComponent as ThunderstormsHailLight } from "../imgs/weather_icons/thunderstorm_slight_hail.svg";
import { ReactComponent as ThunderstormsHailHeavy } from "../imgs/weather_icons/thuderstorm_heavy_hail.svg";

export const wmoCodes = (code, iconHeight = 4) => {
  /*
      0	Clear sky
      1, 2, 3	Mainly clear, partly cloudy, and overcast
      45, 48	Fog and depositing rime fog
      51, 53, 55	Drizzle: Light, moderate, and dense intensity
      56, 57	Freezing Drizzle: Light and dense intensity
      61, 63, 65	Rain: Slight, moderate and heavy intensity
      66, 67	Freezing Rain: Light and heavy intensity
      71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
      77	Snow grains
      80, 81, 82	Rain showers: Slight, moderate, and violent
      85, 86	Snow showers slight and heavy
      95 *	Thunderstorm: Slight or moderate
      96, 99 *	Thunderstorm with slight and heavy hail
*/

  const iconSpace = iconHeight;

  const codeConversionTable = new Map([
    [
      0,
      {
        description: "Clear Sky",
        iconD: <ClearDay style={{ height: iconSpace + "em" }} />,
        iconN: <ClearNight style={{ height: iconSpace + "em" }} />,
      },
    ],

    [
      1,
      {
        description: "Mainly Clear",
        iconD: <MainlyClearDay style={{ height: iconSpace + "em" }} />,
        iconN: <MainlyCleaNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      2,
      {
        description: "Partly Cloudy",
        iconD: <PartlyCloudyDay style={{ height: iconSpace + "em" }} />,
        iconN: <PartlyCloudyNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      3,
      {
        description: "Overcast",
        iconD: <OvercastDay style={{ height: iconSpace + "em" }} />,
        iconN: <OvercastNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      45,
      {
        description: "Fog",
        iconD: <Fog style={{ height: iconSpace + "em" }} />,
        iconN: <Fog style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      48,
      {
        description: "Depositing Rime Fog",
        iconD: <DepositingRimeFog style={{ height: iconSpace + "em" }} />,
        iconN: <DepositingRimeFog style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      51,
      {
        description: "Light Drizzle",
        iconD: <LightDrizzleDay style={{ height: iconSpace + "em" }} />,
        iconN: <LightDrizzleNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      53,
      {
        description: "Moderate Drizzle",
        iconD: <ModerateDrizzleDay style={{ height: iconSpace + "em" }} />,
        iconN: <ModerateDrizzleNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      55,
      {
        description: "Dense Drizzle",
        iconD: <DenseDrizzelDay style={{ height: iconSpace + "em" }} />,
        iconN: <DenseDrizzleNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      56,
      {
        description: "Freezing Light Drizzle",
        iconD: <FreezingLightDrizzelDay style={{ height: iconSpace + "em" }} />,
        iconN: (
          <FreezingLightDrizzleNight style={{ height: iconSpace + "em" }} />
        ),
      },
    ],
    [
      57,
      {
        description: "Freezing Dense Drizzle",
        iconD: <FreezingDenseDrizzelDay style={{ height: iconSpace + "em" }} />,
        iconN: (
          <FreezingDenseDrizzleNight style={{ height: iconSpace + "em" }} />
        ),
      },
    ],
    [
      61,
      {
        description: "Slight Rain",
        iconD: <SlightRainDay style={{ height: iconSpace + "em" }} />,
        iconN: <SlightRainNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      63,
      {
        description: "Moderate Rain",
        iconD: <ModerateRainDay style={{ height: iconSpace + "em" }} />,
        iconN: <ModerateRainNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      65,
      {
        description: "Heavy Rain",
        iconD: <HeavyRain style={{ height: iconSpace + "em" }} />,
        iconN: <HeavyRain style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      66,
      {
        description: "Freezing Light Rain",
        iconD: <FreezingLightRainDay style={{ height: iconSpace + "em" }} />,
        iconN: <FreezingLightRainNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      67,
      {
        description: "Freezing Heavy Rain",
        iconD: <FreezingHeavyRainDay style={{ height: iconSpace + "em" }} />,
        iconN: <FreezingHeavyRainNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      71,
      {
        description: "Slight Snow Fall",
        iconD: <SnowSlight style={{ height: iconSpace + "em" }} />,
        iconN: <SnowSlight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      73,
      {
        description: "Moderate Snow Fall",
        iconD: <SnowModerate style={{ height: iconSpace + "em" }} />,
        iconN: <SnowModerate style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      75,
      {
        description: "Heavy Snow Fall",
        iconD: <SnowHeavy style={{ height: iconSpace + "em" }} />,
        iconN: <SnowHeavy style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      77,
      {
        description: "Snow Grains",
        iconD: <SnowGrains style={{ height: iconSpace + "em" }} />,
        iconN: <SnowGrains style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      80,
      {
        description: "Slight Rain Showers",
        iconD: <SlightRainDay style={{ height: iconSpace + "em" }} />,
        iconN: <SlightRainNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      81,
      {
        description: "Moderate Rain Showers",
        iconD: <ModerateRainDay style={{ height: iconSpace + "em" }} />,
        iconN: <ModerateRainNight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      82,
      {
        description: "Violent Rain Showers",
        iconD: <HeavyRain style={{ height: iconSpace + "em" }} />,
        iconN: <HeavyRain style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      95,
      {
        description: "Thunderstorms",
        iconD: <ThunderstormsLight style={{ height: iconSpace + "em" }} />,
        iconN: <ThunderstormsLight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      96,
      {
        description: "Thunderstors with Slight Hail",
        iconD: <ThunderstormsHailLight style={{ height: iconSpace + "em" }} />,
        iconN: <ThunderstormsHailLight style={{ height: iconSpace + "em" }} />,
      },
    ],
    [
      99,
      {
        description: "Thunderstorms with Heavy Hail",
        iconD: <ThunderstormsHailHeavy style={{ height: iconSpace + "em" }} />,
        iconN: <ThunderstormsHailHeavy style={{ height: iconSpace + "em" }} />,
      },
    ],
  ]);

  const WMOCodes = codeConversionTable.get(code);

  return WMOCodes;
};
