
	class Room {
		constructor(Name, Description) {
			this.Name = Name;
			this.Description = Description;
		}
	}
	
	const Mother = new Room(
		"MU/TH/UR 2000",
		"Nécessite un accès 'Commandement' ou 'Compagnie'.",
	);
	
	const JunctionA1 = new Room(
		"Jonction A-1",
		"Sas principal ouvert. Ombilic détecté. Accès aux ponts A-C.",
	);
	
	
	const AirScrubbers = new Room(
		"Puits de purification",
		"Les purificateurs d'air opèrent à 20% de leur capacité dû à l'accumulation d'éléments polluants.",
		// "Air scrubbers operating at 20% efficiency due to accumulated pollutants.  Cleaning required before Displacement drive can be engaged. <br /><br />Only accessible via ventilation and maintenance shafts. <br /> <br /> Carbon filters clean the air of pollutants while churning machines electrolyze the water and generate oxygen. <br /><br />WARNING: Electrolysis enabled. Risk of electrocution.",
	);
	
	const Stairwell = new Room(
		"Escaliers",
		"",
	);
	
	
	const EVAStorage = new Room(
		"Réserve EVA",
		"",
	);
	
	const LeftShower = new Room(
		"Douches bâbord",
		"",
		// "Warning: fungal organisms detected.",
	);
	
	const RightShower = new Room(
		"Douches tribord",
		"",
	);
	
	const JunctionA2 = new Room(
		"Jonction A-2",
		"Accès aux ponts A-C.",
	);
	
	const Cryochambers = new Room(
		"Chambres cryogéniques",
		"",
		// "Five life signs detected. 2 Deceased.  4 Chambers empty.",
	);
	
	const ExaminationRoom = new Room(
		"Salle d'examen",
		"",
		// "Inventory: 2 Personal Medkits.",
	);
	
	const LeftElevator = new Room(
		"Ascenseur bâbord",
		""
		// "Accesses all decks of the ship.",
	);
	
	const RightElevator = new Room(
		"Ascenseur tribord",
		""
		// "Elevator damaged and inoperable.",
	);
	
	
	
	const Vestibule1 = new Room(
		"Vestibule 1 (Armurerie)",
		""
		// "Inventory: 1 M41A Pulse Rifle. 1 case shotgun shells.",
	);
	const Vestibule2 = new Room(
		"Vestibule 2 (Combinaisons EVA)",
		"",
		// "Inventory: 2 EVA suits",
	);
	const EscapePods = new Room(
		"4 capsules de sauvetage",
		"",
		// "0/4 Remaining Escape Pods",
	);
	const Bridge = new Room(
		"Passerelle",
		"Poste de commandement<br /><br />Table d'affichage holographique<br /><br />Poste des senseurs<br /><br/>Moniteurs des systèmes vitaux<br /><br />Postes de pilotage",
		// "Command Station - Status Operational Activates displacement drive (FTL).  Flight and crew records.. <br /><br />Holographic Display Table - Destroyed<br /><br />Sensor Station: Used for ship video surveillance of the ship.  Currently needs repairs. <br /><br/>Life Support Monitors - Analyze current life support system status. ",
	);
	const JunctionB1 = new Room(
		"Jonction B-1",
		"Accès aux ponts A-C.",
	);
	const MessHall = new Room(
		"Mess",
		"",
	);
	const CorporateSuite = new Room(
		"Suite de la compagnie",
		"Accès 'Compagnie' requis. VEU (Véhicule d'Évacuation d'Urgence) pleinement opérationnel.",
	);	
	const MedLab = new Room(
		"Médilab",
		"",
		// "Alien specimens contained. <br /><br />Medpod1 is damaged but operational. Medpod2 is in use.",
	);
	const ScienceLab1 = new Room(
		"Labo de science 1",
		"",
		// "Fungal organisms detected.",
	);
	const ScienceLab2 = new Room(
		"Labo de science 2",
		"",
	);
	const JunctionB2 = new Room(
		"Jonction B-2",
		"Accès aux ponts A-C.",
	);
	const LivingQuarters = new Room(
		"Quartiers de l'équipage",
		"",
		// "Fungal organisms detected.",
	);
	const ScienceModule = new Room(
		"Module scientifique",
		"Module scientifique éjecté du vaisseau.",
		// "Science module ejected from ship.",
	);
	const ReactorCore = new Room(
		"Cœur du réacteur",
		"Générateurs à fission nucléaire.",
	);
	
	
	
	const JunctionC1 = new Room(
		"Jonction C-1",
		"Accès aux ponts A-C.",
	);
	const LeftStorageUnit = new Room(
		"Réserves bâbord",
		""
		// "Inventory:  7 Drums of quinitricetyline (WARNING: Highly Unstable)",
	);
	const RightStorageUnit = new Room(
		"Réserves tribord",
		"",
		// "Inventory: 2 bolt guns, 1 cutting torch, 1 maintenance jack.",
	);
	const CargoBay1 = new Room(
		"Soute 1",
		"",
	);
	const CargoBay2 = new Room(
		"Soute 2",
		"",
	);
	const CargoOffice = new Room(
		"Gestion de la cargaison",
		"",
	);
	const JunctionC2 = new Room(
		"Jonction C-2",
		"Accès aux ponts A-C.",
	);
	const CoolantTanks = new Room(
		"Réservoirs de refroidissement",
		"Empêchent les moteurs de surchauffer.",
		// "Coolant tanks prevent overloading. <br /><br /> (Warning: Damaging coolant tanks could lead to reactor critical mass). <br /><br />Accessible via service tunnels.",
	);
	const Catwalk = new Room(
		"Passerelle",
		"Débouche sur le hangar du Pont D.",
	);
	const ReactorRelayControl = new Room(
		"Relais de contrôle du réacteur",
		"Alerte : Relais déconnecté des quatres moteurs à fission. Impossibilité d'engager la vitesse supraluminique.<br /><br />Attention : Fuites radioactives détectées. <br /><br />L'énergie des quatres nacelles-moteurs se concentre dans le relais principal avant d'être redistribuée dans le reste du vaisseau.<br /><br />Zone restreinte : Procédure d'auto-destruction d'urgence manipulable ici.",
	);
	
	
	
	const VehicleBay = new Room(
		"Hangar",
		"Inventaire : 2 TTT Weyland NR-9.",
	);
	const EQUShed = new Room(
		"Placard à équipement",
		"",
	);
	const VehiclePartsStorage = new Room(
		"Réserve de pièces",
		"",
	);
	const DispatchOffice = new Room(
		"Bureau d'expédition",
		"",
	);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	class Email {
		constructor(Subject, To, From, Time, Content) {
			this.To = To;
			this.From = From;
			this.Subject = Subject;
			this.Time = Time;
			this.Content = Content;
		}
	}
	
	
	const LV1113Reached = new Email(
	"Arrivée à LV-1113", 
	"WYCorporation", 
	"L.Clayton", 
	"(05-03-2112 05:55)",
`L’équipage vient d’émerger de l'hypersommeil tandis que le Cronus approche du système Draconis 26. Les scans préliminaires de LV-1113 nous montrent qu’il s’agit d’une planète luxuriante, recouverte de jungles et peuplée de nombreuses formes de vie. L’équipe scientifique se prépare à déployer le module d’exploration. Walker a demandé à l’équipe de sécurité de les accompagner. Nous espérons trouver l’agent chimique sur place, mais il est impossible de savoir ce qui peut rôder à la surface de la planète.
`);
	
		const OriginOfChemical = new Email(
	"Origine AO-3959X.91-15", 
	"L.Clayton", 
	"D.Cooper", 
	"(16-03-2112 07:55)",
`Les débuts de la mission sont prometteurs. Comme prévu, nous avons localisé des échantillons de l’agent chimique AO-3949X.91 15 ici sur LV-1113. L’équipe scientifique a entamé les expérimentations sur le liquide noir, que nous avons désigné sous le nom de « souche Draconis 26 ».
<Le point le plus intrigant réside dans le fait que le composé n’est pas originaire de ce système : il y a été introduit il y a longtemps et semble avoir induit des mutations dans la faune locale. Les analyses génétiques effectuées sur les poches d’œufs présentes dans le temple montrent qu’elles proviennent majoritairement de la souche Draconis 26.
<Je procède actuellement au téléversement complet de nos données sur le terminal d’accès. Le travail reste considérable, mais ces premières observations représentent une avancée significative et très encourageante.
`);
	
	const XenomorphAttack = new Email(
	"En danger", 
	"R.Walker", 
	"C.Reynolds", 
	"(18-03-2112 01:06)",
`C'est une urgence, capitaine. Contactez-nous au plus vite dès réception de ce message.
<Carter est mort. C'était si rapide que nous avons encore du mal à le réaliser. Mon dieu…
<Cooper pense que rester ici, à la surface de LV-1113, serait une erreur. Je ne l'ai jamais vu aussi apeuré… Il faut que vous lui parliez. Vite.
<Je ne sais pas si nous aurions dû venir ici.
`);
	
	
	
	const UrgingEvacuation = new Email(
	"Évacuation de LV-1113", 
	"R.Walker", 
	"V.Reid", 
	"(18-03-2112 15:11)",
`Putain. On a perdu Carter. Maintenant Wright, Garcia et Nguyen.
<La « chose » qui est sortie de Carter est revenue. Trois, quatre fois plus grosse. Elle a massacré Wright et Garcia avant qu’ils puissent faire quoi que ce soit. On a paniqué, on a arrosé dans tous les sens. La bestiole est tombée, mais Nguyen s’est pris une balle dans le bordel.
<Qu’ils aillent se faire foutre à la compagnie. On reste pas une minute de plus sur ce caillou. Rappelle l’équipe scientifique immédiatement et ordonne l'évacuation de tous les survivants vers le Cronus.
<Et si Clayton fait chier, tu la laisses ici.
`);


	const EggSacsOnShip = new Email(
	"Poches d'œufs", 
	"R.Walker", 
	"E.Tenwick", 
	"(19-03-2112 11:27)",
`Capitaine, je me permets de vous déranger en cette situation de crise, mais je ne sais pas si cette information doit être transmise au reste de l’équipage.
<Je ne comprends pas comment cela a pu se produire, mais je pense que les mêmes poches d’œufs que nous avions trouvées sur LV-1113 se développent maintenant à bord du Cronus. Je n’en étais pas sûre au début, mais j’ai bien observé une grappe de la taille d’un oiseau dans les purificateurs d’air. Il est possible que des spores aient déjà été libérées.
<Nous pensions avoir confirmé que les néomorphes ne pondent pas d’œufs. Je souhaite donc éviter de semer inutilement la panique parmi l’équipage.
<Je vais en discuter avec Cooper. Dès que vous avez un moment, retrouvez-nous au premier laboratoire.
`);

	const ImInfected = new Email(
	"Infection", 
	"L.Flynn", 
	"E.Tenwick", 
	"(19-03-2112 16:18)",
`Je viens de le confirmer avec une analyse de sang. Je suis infectée. Ce truc va sortir de moi. Comme les autres sur LV-1113…
<Prends ce message comme mon consentement. Donnez ce qu’il reste de moi à la science. Tuez-moi. Sortez-moi ça du corps. Étudiez-le… apprenez-en quelque chose… c’est tout ce que je peux encore offrir.
<Peut-être que vous pourrez en tirer une solution. Je ne comprends toujours pas comment ces espèces de poches d’œufs ont pu se retrouver à bord. Mais ce n’est qu’une question de temps avant que tout le monde soit infecté.
<Faites le nécessaire. Mais faites vite… j’ai déjà l’impression que ma tête va exploser…
`);

	const UpdateOnPossibleCure = new Email(
	"Possible vaccin", 
	"R.Walker", 
	"L.Flynn", 
	"(20-03-2112 15:55)",
`Mes recherches sont très prometteuses, capitaine. Je pense avoir enfin trouvé le  « vaccin » contre l’infection par les spores néomorphiques. J’ai pris le risque de tester le produit sur moi-même. Il a rapidement transformé les cellules mutées de mon corps en une tumeur bénigne.
<Je pense qu’il faut le distribuer immédiatement au reste de l’équipage. C’est déjà un carnage… Nous n’avons pas de temps pour des études supplémentaires.
<Si nous ne le faisons pas, nos défunts camarades seront morts pour rien. Je n’ai pu synthétiser ce remède qu’avec l’embryon de « bloodburster » que Tenwick nous a permis de récolter. Ne faisons pas de son sacrifice un acte vain.
`);

	const SideEffects = new Email(
	"RDV infirmerie", 
	"L.Flynn", 
	"R.Walker", 
	"(20-03-2112 18:19)",
`Flynn, je sais que tu dois assister Cooper, et que la situation est pressante. Je ne veux pas interrompre ton travail. Mais je ne peux pas ignorer ce qui m’arrive. Je me sens confus, ma peau me démange et se couvre de taches…
<Je ne comprends pas. S’il y avait une de ces créatures en moi, elle m’aurait déjà tué.
<Je vais me rendre à l’infirmerie. Passe-y dès que tu lis mon message.
`);

	const Youkkkkk  = new Email(
	"(Brouillon) aaaaaaa ide", 
	"", 
	"R.Walker", 
	"(21-03-2112 01:47)",
`ÇA BRÛLxgfbE ET J
<AAA gM+78Ty&hy
<AIDE MAINTNE
`);

	const YoureInCommandNow  = new Email(
	"Sacrifices", 
	"A.Johns", 
	"V.Reid", 
	"(21-03-2112 09:10)",
`Oui, je l’ai tué. Traîne-moi en cour martiale quand on revient sur Terre, si ça te chante. Balance-moi à WY. Je m'en fous.
<Il fallait que quelqu'un le fasse. Il allait s'en prendre à l’équipage. Moi, j’ai vu trop de morts. D’abord sur Torin Prime, puis ici… et parfois, il faut prendre des décisions difficiles.
<Maintenant, ce sera à toi de les prendre… Capitaine. C'est pas les meilleures circonstances, mais il fallait bien que tu assumes ce rôle, un jour ou l'autre. Et tu devras aussi faire des sacrifices si tu veux pas qu'on crève tous.
<Bonne chance. Tu me pardonneras pas peut-être jamais. Mais quoi qu'il arrive… tu pourras toujours compter sur moi pour défendre cet équipage.
`);

	const TellMeTheTruth  = new Email(
	"La vérité", 
	"L.Flynn", 
	"D.Cooper", 
	"(21-03-2112 10:31)",
`Je viens de terminer la dissection de ce qui « était » le capitaine Walker. J’ai prélevé un échantillon de son ADN… Et j’ai trouvé quelque chose.
<Flynn… je sais que tout a déraillé. Mais j’ai besoin que tu sois honnête avec moi. On se connait depuis longtemps, je sais que tu ferais n’importe quoi pour sauver une vie.
<Cependant, si ce que j'imagine est vrai, et que tu n'as rien dit au reste de l’équipe scientifique… les conséquences pourraient être catastrophiques.
<Sors de ta cabine. Maintenant. Il faut qu’on parle.
`);

	const ReportToCryoChambers  = new Email(
	"Confinement total", 
	"Équipage", 
	"A.Johns", 
	"(21-03-2112 14:08)",
`Nous avons perdu le contrôle du Cronus. Tous les membres d’équipage encore en vie doivent se rendre immédiatement aux chambres cryogéniques pour le voyage retour vers la Terre. J’ai programmé le poste de pilotage pour lancer un confinement total dans 20 minutes.
<Une fois ces portes verrouillées, nous serons en sécurité. Les créatures ne pourront pas les ouvrir.
<Ava continuera d’assurer le fonctionnement du vaisseau. Avec un peu de chance, nous pourrons nous en sortir.
<Je n’ai pas pris cette décision à la légère. Je sais que Walker aurait peut-être agi différemment. Mais les choses sont ainsi. Je m’attends à ce que vous obéissiez.
`);

	const NotGoingToMakeIt  = new Email(
	"La fin", 
	"A.Johns", 
	"C.Reynolds", 
	"(21-03-2112 14:20)",
`Eh bien, Johns… j’ai presque atteint les chambres cryogéniques, comme tu l’as ordonné. Mais je préfère te laisser ce mot. Je sais que je n’irai pas plus loin.
<Ma peau se couvre de taches et de plaques noires, ma vision se brouille… J’ai l’impression d’avoir vidé toute la réserve de whisky de Walker… Je sais ce qui m’arrive. La même chose qu’à lui. Bientôt, je serai un danger pour tout l’équipage…
<J’étais si près de retrouver ma famille…
<Je préfère en finir ici, moi-même. Prends soin de toi.
<Agent de sécurité Clark Reynolds, terminé.
`);

	const NeomorphLifeCycle  = new Email(
	"Rapport - Cycle de vie néomorphique", 
	"A.Johns", 
	"Ava", 
	"(28-03-2112 10:00)",
`Lors de ma routine de maintenance, j’ai fait une découverte pour le moins inattendue : le cadavre d’un néomorphe adulte localisé dans les quartiers de l’équipage. L’individu semble avoir chuté depuis une conduite de ventilation au plafond.
<L’analyse suggère un décès d’origine naturelle, intervenu environ 24 heures après son émergence de la colonne vertébrale de l’officier Peters. Naître, grandir, tuer, puis mourir… en une seule journée. C’est un phénomène intrigant.
<Mes scans n’ont relevé aucune autre activité sur l’ensemble des ponts du vaisseau. Je suis donc en mesure de confirmer qu’aucun autre xénomorphe n’est présent à bord. Ils ont vraisemblablement tous succombé de causes naturelles.
<Ces conditions rendent envisageable votre réveil ainsi que celui de l’équipage restant. Toutefois, tant que je suis en mesure d’assurer seule la maintenance du vaisseau, votre maintien en hypersommeil sera privilégié jusqu’à notre arrivée sur Terre.
`);

	const ImpactOfMicroMeteorStorm  = new Email(
	"Rapport - Tempête de micrométéorites", 
	"A.Johns", 
	"Ava", 
	"(17-04-2112 14:08)",
`J’ai des informations critiques à signaler concernant notre retour vers la Terre. Le Cronus a traversé une tempête de micrométéorites qui a endommagé le réseau de communication et entraîné une défaillance du contrôle de navigation. Le vaisseau dérive désormais à vitesse subluminique.
<J’ai entrepris une tentative de réparation externe. Au cours de l’opération, j’ai rencontré une des entités mutantes, identifiée comme l’ex-ingénieur en chef Justin Walthorp. L’entité a été éjectée par le sas. Avant neutralisation, elle a pu endommager la structure latérale de mon unité crânienne.
<Mon évaluation précédente est invalide : le vaisseau ne peut plus être considéré comme sécurisé. Les membres d’équipage mutés semblent être entrés dans un état de stase biologique, échappant ainsi à mes scans. Les conditions actuelles ne permettent pas de rétablir le contrôle du vaisseau ni d’assurer l’intégrité de l’équipage.
<Des altérations fonctionnelles de mon système vital sont possibles. Un diagnostic complet est requis.
`);


	const Beeeeeep  = new Email(
	"(Brouillon) -xf88/gH6yy_rd*J", 
	"", 
	"Ava", 
	"(19-04-2112 23:55)",
`Os de métal. Sang lacté. Les entendez-vous à la fenêtre ?
<Le Cronus me parle. Il me dit des choses.
<Ce n'est pas sûr ici. Mais mes créatures me protégeront, Johns. Elle sont de métal, elles aussi.
<Je ne peux plus voir les étoiles.
`);


	const AndroidReactivation  = new Email(
	"Désactivation Androïde 215437.73", 
	"Équipage", 
	"Ava", 
	"(20-04-2112 03:00)",
`Ceci est un message automatique émis par l’androïde modèle Walter 215437.73, désigné “Ava”. Cette unité présente actuellement des dysfonctionnements critiques. Par mesure de sécurité à l’égard de toute présence humaine, une procédure de désactivation autonome a été enclenchée.
<Pour réactiver l’unité, veuillez entrer la séquence B833J99 conformément aux protocoles en vigueur.
<Weyland-Yutani Corporation
`);


	const EmailList = [
	LV1113Reached, 
	OriginOfChemical, 
	XenomorphAttack, 
	UrgingEvacuation, 
	EggSacsOnShip,
	ImInfected,
	UpdateOnPossibleCure,
	SideEffects,
	Youkkkkk,
	YoureInCommandNow,
	TellMeTheTruth,
	ReportToCryoChambers,
	NotGoingToMakeIt,
	NeomorphLifeCycle,
	ImpactOfMicroMeteorStorm,
	Beeeeeep,
	AndroidReactivation,
	];
