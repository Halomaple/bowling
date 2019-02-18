import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-scoring',
	templateUrl: './scoring.component.html',
	styleUrls: ['./scoring.component.scss']
})
export class ScoringComponent implements OnInit {
	private rolls = new Array(21);
	private rollIndex = 0;

	constructor() {}

	ngOnInit() {
		for (let i = 0; i < this.rolls.length; i++) {
			this.rolls[i] = 0;
		}
	}

	Score(): number {
		let score = 0;
		let currentFrame = 0;
		for (let frame = 0; frame < 10; frame++) {
			currentFrame = frame * 2;
			const nextFrameIndex = (frame + 1) * 2;

			// score current frame first
			score += this.rolls[currentFrame] + this.rolls[currentFrame + 1];

			// and then continue with strike or spare
			if (this.rolls[currentFrame] === 10) {
				// strike!
				if (this.rolls[nextFrameIndex] === 10) {
					// strike again!
					score += this.rolls[nextFrameIndex] + this.rolls[frame < 9 ? nextFrameIndex + 2 : nextFrameIndex];
				} else {
					score += this.rolls[nextFrameIndex] + this.rolls[nextFrameIndex + 1];
				}
			} else if (this.rolls[currentFrame] + this.rolls[currentFrame + 1] === 10) {
				// spare!
				score += this.rolls[nextFrameIndex];
			}
		}

		return score;
	}

	Roll(rollNumber: number) {
		if (rollNumber > 10) {
			throw new Error('rollNumber can not be greater than 10!');
		}

		this.rolls[this.rollIndex] = rollNumber;
		if (rollNumber === 10) {
			this.rollIndex += 2;
		} else {
			this.rollIndex++;
		}
	}
}
