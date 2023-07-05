import { beforeEach } from 'node:test'
import ship from '../src/ships.js'

describe('Tests ship properties.', () => {
    let newShip;
    beforeEach(() => {
        newShip = ship(5);
    })

    test('Read ship properties', () => {
        newShip = ship(5);
        expect(newShip.length).toBe(5);
        expect(newShip.orientation).toBe(null);
        expect(newShip.hits).toBe(0);
        expect(newShip.shipID).toBe(1);
        expect(newShip.isPlaced).toBeFalsy();
        expect(newShip.isSunk).toBeFalsy();
    })

})

describe('Test ship methods.', () => {
    let testShip;

    test('Add hit.', () => {
        testShip = ship(5);
        testShip.shipHit();
        expect(testShip.hits).toBe(1);
    })

    test('Change orientation.', () => {
        testShip = ship(5);
        testShip.changeOrientation(1);
        expect(testShip.orientation).toBe(1);
    })
})