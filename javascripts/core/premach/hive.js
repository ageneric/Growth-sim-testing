function buyHive() {
	if (player.hive.bought.lte(200)) {
		if (player.money.lt(player.hive.bought.mul(5).add(20))) return;
		player.money = player.money.sub(player.hive.bought.mul(5).add(20));
		player.hive.total = player.hive.total.add(1);
		player.hive.bought = player.hive.bought.add(1);
	} else {
		if (player.money.lt(Decimal.pow(1.01, player.hive.bought.sub(200)).mul(1000))) return;
		player.money = player.money.sub(Decimal.pow(1.01, player.hive.bought.sub(200)).mul(1000));
		player.hive.total = player.hive.total.add(1);
		player.hive.bought = player.hive.bought.add(1);
	}
}
function buyMaxHive(money) {
	if (money.lt(Decimal.pow(1.01, player.hive.bought.sub(200)).mul(1000))) return;
	var hiveamt = new Decimal(money.add(Decimal.pow(1.01, player.hive.bought.sub(200)).mul(101000)).div(101000).log(1.01)).sub(player.hive.bought.sub(200)).floor().max(0);
	player.money = player.money.sub(Decimal.pow(1.01, player.hive.bought.add(hiveamt).sub(200)).mul(101000).sub(Decimal.pow(1.01, player.hive.bought.sub(200)).mul(101000))).max(0);
	player.hive.total = player.hive.total.add(hiveamt);
	player.hive.bought = player.hive.bought.add(hiveamt);
}