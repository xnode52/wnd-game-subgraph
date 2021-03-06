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

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("approved", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExampleEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
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

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approved(): Bytes {
    let value = this.get("approved");
    return value!.toBytes();
  }

  set approved(value: Bytes) {
    this.set("approved", Value.fromBytes(value));
  }
}

export class statsEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save statsEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save statsEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("statsEntity", id.toString(), this);
    }
  }

  static load(id: string): statsEntity | null {
    return changetype<statsEntity | null>(store.get("statsEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get wizardMinted(): i32 {
    let value = this.get("wizardMinted");
    return value!.toI32();
  }

  set wizardMinted(value: i32) {
    this.set("wizardMinted", Value.fromI32(value));
  }

  get wizardBurned(): i32 {
    let value = this.get("wizardBurned");
    return value!.toI32();
  }

  set wizardBurned(value: i32) {
    this.set("wizardBurned", Value.fromI32(value));
  }

  get wizardStolen(): i32 {
    let value = this.get("wizardStolen");
    return value!.toI32();
  }

  set wizardStolen(value: i32) {
    this.set("wizardStolen", Value.fromI32(value));
  }

  get dragonMinted(): i32 {
    let value = this.get("dragonMinted");
    return value!.toI32();
  }

  set dragonMinted(value: i32) {
    this.set("dragonMinted", Value.fromI32(value));
  }

  get dragonBurned(): i32 {
    let value = this.get("dragonBurned");
    return value!.toI32();
  }

  set dragonBurned(value: i32) {
    this.set("dragonBurned", Value.fromI32(value));
  }

  get dragonStolen(): i32 {
    let value = this.get("dragonStolen");
    return value!.toI32();
  }

  set dragonStolen(value: i32) {
    this.set("dragonStolen", Value.fromI32(value));
  }
}
