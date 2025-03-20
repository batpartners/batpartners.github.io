---
title: "ArcData"
layout: single
header:
  teaser: "/assets/images/ArcData.png"

collection: Datatype
entries_layout: grid
author_profile: true

categories:
  - DataType

translated: true
lang: en
permalink: /en/datatype/DataType-ArcData/
translation_link: /datatype/DataType-ArcData/

sidebar:
  nav: "sidebar"
toc: true
toc_label: "Contents"
toc_icon: "cog"
toc_sticky: true

tags: 
  - GERTY
---

:kr: [KR]( {{ page.translation_link | absolute_url }} ){: .lang-switch }

# Description

* This component defines *ArcData* based on the filler material conditions (Weld Schedule) and welding mode.
*ArcData* is a fundamental data format used in *ABB Arc Instructions* for arc welding. It serves as a *sub-data* that contains shared condition values for *SeamData* and *WeldData*.
ArcData stores information such as the program identification ID for each filler material, wire feed speed, voltage, and current.

<p align="center">  <img src="/assets/images/ArcData.png" align="center" width="32%"></p>

# Input

* **Weld schedule [Int / Item]** : Enter the welding program identification number (ID) for the welding system.
The preset welding mode inside the welding equipment is determined based on the Weld Schedule.
Users can select or input the Weld Schedule using GERTY's WeldProgram component.
For example, in the case of a *Fronius Arc Welder (TPS / TPSi)*:
- When setting the *Program Mode* on the *ABB Pendant*, the *Synergic Number* is applied.  
- When setting the *Job Mode* on the *ABB Pendant*, the *Job Number* stored inside the welder is applied.  
In *GERTY*, the *Program Mode* is used by default, and the *WeldProgram (TPS/TPSi) component* is utilized.

* **Weld mode [int / item]** :
Enter the identification number (ID) of the welding program in the welding system. The welding mode preset within the welding equipment is determined based on the weld schedule. Users can select/input the Weld Schedule using GERTY's WeldProgram component.

For example, in the Fronius Arc Welder (TPS / TPSi common):
- When setting Program Mode on the ABB Pendant, it applies using the Synergic Number.
- When setting Job Mode on the ABB Pendant, it applies using the internal Job Number of the welder.
Assuming GERTY defaults to using Program Mode, you would use the WeldProgram (TPS / TPSi) component.

* **Weld mode [int / item]** :
Select the Weld Mode for the welding system. The Weld Mode parameters vary depending on the welding equipment manufacturer, so refer to each welding equipment manual. For example, with the Fronius TPS Arc Welder:
- 0: Standard Mode (if the Synergic Number includes the Standard option)
- 1: Pulse Mode (if the Synergic Number includes the Pulse option)
- 7: CMT Mode (if the Synergic Number includes the CMT option)

For example, with the Fronius TPSi Arc Welder:
- 0 : -
- 1 : Arc Length Stabilizer (Using options)

## Built-in Param | Single Arc​

If the welding equipment is a single wire system, only set the Single Arc Parameters.

* **Voltage [num / Item]** : Enter the voltage condition. For example, in the Fronius Arc Welder (TPS / TPSi common), Voltage corresponds to the Arc Length Correction value (-10 to 10).
* **WireFeed [num / Item]** : Enter the WireFeed value in meters per minute (m/min). For example, in the Fronius TPSi Welder, the value must fall within the WireFeed range selected in the WeldProgram(TPSi) Spec. This ensures that no parameter errors occur during the execution of the actual RAPID Program created.

<figure>
	<a href="https://b-at.kr/wp-content/uploads/2023/05/weldsched-arcdata-1-768x456.png"><img src="https://b-at.kr/wp-content/uploads/2023/05/weldsched-arcdata-1-768x456.png"></a>
</figure>

* **Control [num / Item]** : Adjustment value applied to specific welders. Parameters vary depending on the welding equipment. For example, in the Fronius Arc Welder (TPS / TPSi common), this could be the Dynamic/Pulse Correction value (-10 to 10).
* **Current** : Welding current during welding. For example, in Fronius's case, no specific allocation is needed.
<br>
Analog tuning value sent to certain welders.

## Built-in Param | Twin Arc

If the welding equipment is a twin wire system, set the conditions for the second wire using the Twin Arc Parameters.

* **Voltage [num / Item]**: Enter the voltage condition.
* **WireFeed [num / Item]**: Enter the WireFeed value in meters per minute (m/min).
* **Control [num / Item]**: Adjustment value applied to specific welders.

# Output

* **ArcData [ArcData / Item]**: Outputs the defined ArcData based on the input and related settings.
* **Code [Text / Item]**: Outputs the defined ArcData code as a string.
