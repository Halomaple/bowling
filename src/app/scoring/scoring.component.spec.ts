import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringComponent } from './scoring.component';

describe('ScoringComponent', () => {
	let game: ScoringComponent;
	let fixture: ComponentFixture<ScoringComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ScoringComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ScoringComponent);
		game = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create scoring component', () => {
		expect(game).toBeTruthy();
	});

	it('should score a gutter game', () => {
		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		game.Roll(0);
		game.Roll(0);

		expect(game.Score()).toBe(0);
	});

	it('should score one roll', () => {
		game.Roll(1);

		expect(game.Score()).toBe(1);
	});

	it('should score one strike', () => {
		game.Roll(10);

		expect(game.Score()).toBe(10);
	});

	it('should score one strike and two rolls', () => {
		game.Roll(10);

		game.Roll(1);
		game.Roll(2);

		expect(game.Score()).toBe(16);
	});

	it('should score two strikes and next two rolls', () => {
		game.Roll(10);

		game.Roll(10);

		game.Roll(2);
		game.Roll(2);

		expect(game.Score()).toBe(40);
	});

	it('should score a spare', () => {
		game.Roll(5);
		game.Roll(5);

		game.Roll(1);

		expect(game.Score()).toBe(12);
	});

	it('should score two spares', () => {
		game.Roll(5);
		game.Roll(5);

		game.Roll(6);
		game.Roll(4);

		game.Roll(1);

		expect(game.Score()).toBe(28);
	});

	it('should score last spare', () => {
		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(1);
		game.Roll(1);

		game.Roll(5);
		game.Roll(5);

		game.Roll(1);

		expect(game.Score()).toBe(29);
	});

	it('should score a perfect game', () => {
		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		game.Roll(10);

		expect(game.Score()).toBe(300);
	});
});
