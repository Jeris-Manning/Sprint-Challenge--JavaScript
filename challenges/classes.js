// 1. Copy and paste your prototype in here and refactor into class syntax.

class ClassyCuboidMaker {
  constructor(cuboidDimensions) {
    this.length = cuboidDimensions.length;
    this.width = cuboidDimensions.width;
    this.height = cuboidDimensions.height;
  }
  volume() {
    return this.length * this.height * this.width;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const classyCuboid = new ClassyCuboidMaker({
  length: 4,
  height: 5,
  width: 5
});

console.log(classyCuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(classyCuboid.volume()); // 100
console.log(classyCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends ClassyCuboidMaker {
  constructor(cubeDimensions) {
    super(cubeDimensions);
  }
  cubeVolume() {
    if (
      (this.width != undefined || this.height != undefined) &&
      (this.length != this.width || this.length != this.height)
    ) {
      console.log(
        `Using 'length' for all dimensions. You've been warned!`
      );
    }

    return Math.pow(this.length, 3);
  }
  cubeSurfaceArea() {
    if (
      (this.width != undefined || this.height != undefined) &&
      (this.length != this.width || this.length != this.height)
    ) {
      console.log(
        `Using 'length' for all dimensions. You've been warned!`
      );
    }
    return 6 * Math.pow(this.length, 2);
  }
}

const timeCube = new CubeMaker({
  length: 4,
  width: 4,
  height: 6
  
});

console.log(timeCube);
console.log(timeCube.cubeVolume());
console.log(timeCube.cubeSurfaceArea());
