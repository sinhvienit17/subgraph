// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BetInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("betIsEven", Value.fromBoolean(false));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BetInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BetInfo entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BetInfo", id.toString(), this);
    }
  }

  static load(id: string): BetInfo | null {
    return changetype<BetInfo | null>(store.get("BetInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get round(): string | null {
    let value = this.get("round");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set round(value: string | null) {
    if (!value) {
      this.unset("round");
    } else {
      this.set("round", Value.fromString(<string>value));
    }
  }

  get player(): string | null {
    let value = this.get("player");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set player(value: string | null) {
    if (!value) {
      this.unset("player");
    } else {
      this.set("player", Value.fromString(<string>value));
    }
  }

  get betIsEven(): boolean {
    let value = this.get("betIsEven");
    return value!.toBoolean();
  }

  set betIsEven(value: boolean) {
    this.set("betIsEven", Value.fromBoolean(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class PlayerInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("lastRollId", Value.fromBigInt(BigInt.zero()));
    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("totalBetAmount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PlayerInfo entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PlayerInfo entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PlayerInfo", id.toString(), this);
    }
  }

  static load(id: string): PlayerInfo | null {
    return changetype<PlayerInfo | null>(store.get("PlayerInfo", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get lastRollId(): BigInt {
    let value = this.get("lastRollId");
    return value!.toBigInt();
  }

  set lastRollId(value: BigInt) {
    this.set("lastRollId", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get totalBetAmount(): BigInt {
    let value = this.get("totalBetAmount");
    return value!.toBigInt();
  }

  set totalBetAmount(value: BigInt) {
    this.set("totalBetAmount", Value.fromBigInt(value));
  }

  get rounds(): Array<string> {
    let value = this.get("rounds");
    return value!.toStringArray();
  }

  set rounds(value: Array<string>) {
    this.set("rounds", Value.fromStringArray(value));
  }
}

export class RollRound extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rollId", Value.fromBigInt(BigInt.zero()));
    this.set("dealerBalance", Value.fromBigInt(BigInt.zero()));
    this.set("totalAmountPerRoll", Value.fromBigInt(BigInt.zero()));
    this.set("resultIsEven", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RollRound entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RollRound entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RollRound", id.toString(), this);
    }
  }

  static load(id: string): RollRound | null {
    return changetype<RollRound | null>(store.get("RollRound", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rollId(): BigInt {
    let value = this.get("rollId");
    return value!.toBigInt();
  }

  set rollId(value: BigInt) {
    this.set("rollId", Value.fromBigInt(value));
  }

  get dealerBalance(): BigInt {
    let value = this.get("dealerBalance");
    return value!.toBigInt();
  }

  set dealerBalance(value: BigInt) {
    this.set("dealerBalance", Value.fromBigInt(value));
  }

  get totalAmountPerRoll(): BigInt {
    let value = this.get("totalAmountPerRoll");
    return value!.toBigInt();
  }

  set totalAmountPerRoll(value: BigInt) {
    this.set("totalAmountPerRoll", Value.fromBigInt(value));
  }

  get resultIsEven(): boolean {
    let value = this.get("resultIsEven");
    return value!.toBoolean();
  }

  set resultIsEven(value: boolean) {
    this.set("resultIsEven", Value.fromBoolean(value));
  }

  get isRolledDice(): boolean {
    let value = this.get("isRolledDice");
    return value!.toBoolean();
  }

  set isRolledDice(value: boolean) {
    this.set("isRolledDice", Value.fromBoolean(value));
  }

  get players(): Array<string> {
    let value = this.get("players");
    return value!.toStringArray();
  }

  set players(value: Array<string>) {
    this.set("players", Value.fromStringArray(value));
  }
}
