import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringComponent } from './scoring.component';

fdescribe('ScoringComponent', () => {
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

	it('should score a gutter', () => {
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
});
