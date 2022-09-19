import {
	Belief,
	Building,
	Leader,
	Nation,
	NationColor,
	Unciv,
	Unique,
	VictoryType,
} from "unciv-mod-toolchain";

Unciv(() => {
	new Belief("Hades", "Pantheon").unique(
		new Unique().add("[+1 Gold] from every [Luxury resource]")
	);

	new Building("Golden Statue").cost(1e8).required("Monument");

	var Economy = new VictoryType("Economy")
		.setVictoryIntro("Build Golden Statue\nto win!")
		.milestones("Build [Golden Statue]")
		.setVictoryText(
			"The golden statue you built towered in the center of the city to declare your wealth and status to the world!"
		)
		.setDefeatText("You defeat!");

	var RealmOfMaiSui = new Nation(
		"Realm of MaiSui",
		new Leader("MaiSui", Economy).unique(
			new Unique("Trade Reform")
				.add("[+1 Gold] from each Trade Route")
				.add("[Great Merchant] is earned [50]% faster")
		)
	)
		.adjective("Chinese")
		.setColor(new NationColor().inner(64, 191, 191).outer(255, 255, 255))
		.addCitie("MaiCity");
});
