function buyFactory() {
	if (player.factories.gte(30)) {
		if (getFacScal() || (!vm.pus[2].bought && player.generators.lte(player.factories.mul(0.5)))) return;
		player.money = player.money.sub(Decimal.pow(50, player.factories.sub(30)).mul(1e34));
		player.factories = player.factories.add(1);
		return;
	}
	if (player.money.lt(Decimal.pow(10, player.factories).mul(1e4)) || (!vm.pus[2].bought && player.generators.lte(player.factories.mul(0.5)))) return;
	player.money = player.money.sub(Decimal.pow(10, player.factories).mul(1e4));
	player.factories = player.factories.add(1);
}
function getFacScal() {
	return player.factories.lt(30) ? getNScal(10, player.factories, 1e4) : getNScal(50, player.factories.sub(30).mul(Decimal.pow(1.5, player.factories.sub(100))), 1e34);
}