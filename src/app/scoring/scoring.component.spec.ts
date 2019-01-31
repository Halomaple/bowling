import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringComponent } from './scoring.component';

fdescribe('ScoringComponent', () => {
	let component: ScoringComponent;
	let fixture: ComponentFixture<ScoringComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ScoringComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ScoringComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create scoring component', () => {
		expect(component).toBeTruthy();
	});

	it('should score a strike', () => {
		component.RollStrike();
		component.Roll(1, 0);

		expect(component.getScore()).toBe(11);
	});
});
