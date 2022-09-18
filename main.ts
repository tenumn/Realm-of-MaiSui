import {
	Building,
	Leader,
	Nation,
	NationColor,
	Unciv,
	Unique,
	VictoryType,
} from "unciv-mod-toolchain";

Unciv(() => {
	var GoldenStatue = new Building("Golden Statue")
		.cost(1e8)
		.isWonder(true, true)
		.required("Monument");

	var Economy = new VictoryType("Economy")
		.setVictoryIntro("Build Golden Statue\nto win!")
		.milestones("Build [Golden Statue]");

	var MaiSui = new Leader("MaiSui", Economy).unique(
		new Unique("Trade Reform").add("[+100]% [Gold] from Trade Routes")
	);

	var RealmOfMaiSui = new Nation("Realm of MaiSui", MaiSui)
		.adjective("Chinese")
		.setColor(new NationColor().inner(64, 191, 191).outer(255, 255, 255))
		.addCitie("MaiCity");
});
