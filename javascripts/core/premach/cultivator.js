function upCvt() {
	if (player.money.lt(Decimal.pow(2e3, player.cvt.level.add(1)))) return;
	player.cvt.level = player.cvt.level.add(1);
	player.money = player.money.sub(Decimal.pow(2e3, player.cvt.level));
}
function buyCvt() {
	if (player.cvt.bought.lte(200)) {
		if (player.money.lt(player.cvt.bought.mul(5).add(20))) return;
		player.money = player.money.sub(player.cvt.bought.mul(5).add(20));
		player.cvt.total = player.cvt.total.add(1);
		player.cvt.bought = player.cvt.bought.add(1);
	} else if (player.cvt.bought.lte(4000)) {
		if (player.money.lt(Decimal.pow(1.01, player.cvt.bought.sub(200)).mul(1000))) return;
		player.money = player.money.sub(Decimal.pow(1.01, player.cvt.bought.sub(200)).mul(1000));
		player.cvt.total = player.cvt.total.add(1);
		player.cvt.bought = player.cvt.bought.add(1);
	} else {
		if (player.money.lt(Decimal.pow(1.1, player.cvt.bought.sub(4000)).mul(2.7e19))) return;
		player.money = player.money.sub(Decimal.pow(1.1, player.cvt.bought.sub(4000)).mul(2.7e19));
		player.cvt.total = player.cvt.total.add(1);
		player.cvt.bought = player.cvt.bought.add(1);
	}
}
function buyMaxCvt(money) {
	if (player.cvt.bought.lt(4000)) {
		if (player.money.lt(Decimal.pow(1.01, player.cvt.bought.sub(200)).mul(1000))) return;
		var cvtamt = new Decimal(money.add(Decimal.pow(1.01, player.cvt.bought.sub(200)).mul(101000)).div(101000).log(1.01)).sub(player.cvt.bought.sub(200)).floor().max(0).min(Decimal.sub(4000, player.cvt.bought));
		player.money = player.money.sub(Decimal.pow(1.01, player.cvt.bought.add(cvtamt).sub(200)).mul(101000).sub(Decimal.pow(1.01, player.cvt.bought.sub(200)).mul(101000))).max(0);
		player.automoney = player.automoney.sub(Decimal.pow(1.01, player.cvt.bought.add(cvtamt).sub(200)).mul(101000).sub(Decimal.pow(1.01, player.cvt.bought.sub(200)).mul(101000)));
		player.cvt.total = player.cvt.total.add(cvtamt);
		player.cvt.bought = player.cvt.bought.add(cvtamt);
	} else {
		if (player.money.lt(Decimal.pow(1.1, player.cvt.bought.sub(4000)).mul(2.7e19))) return;
		var cvtamt = new Decimal(money.add(Decimal.pow(1.1, player.cvt.bought.sub(4000)).mul(2.97e20)).div(2.97e20).log(1.1)).sub(player.cvt.bought.sub(4000)).floor().max(0);
		player.money = player.money.sub(Decimal.pow(1.1, player.cvt.bought.add(cvtamt).sub(4000)).mul(2.97e20).sub(Decimal.pow(1.1, player.cvt.bought.sub(4000)).mul(2.97e20))).max(0);
		player.automoney = player.automoney.sub(Decimal.pow(1.1, player.cvt.bought.add(cvtamt).sub(4000)).mul(2.97e20).sub(Decimal.pow(1.1, player.cvt.bought.sub(4000)).mul(2.97e20)));
		player.cvt.total = player.cvt.total.add(cvtamt);
		player.cvt.bought = player.cvt.bought.add(cvtamt);
	}
}
function buyMaxCvtUp(money) {
	if (player.money.lt(Decimal.pow(2e3, player.cvt.level).mul(2e3))) return;
	var cvtupamt = new Decimal(money.log(2e3)).floor().sub(player.cvt.level).max(0);
	player.money = player.money.sub(Decimal.pow(2e3, player.cvt.level.add(cvtupamt)));
	player.cvt.level = player.cvt.level.add(cvtupamt);
}
