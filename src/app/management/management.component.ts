import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

const URLMapper = [
	{ phase: 'pre-Design', url: '/management', redirect: true },
	{ phase: 'Design', url: '/management', redirect: true }
];

@Component({
	selector: 'app-prod1',
	templateUrl: './management.component.html',
	styleUrls: ['./management.component.scss']
})

export class ManagementComponent implements OnInit {
	managementForm: FormGroup;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	dataSource: MatTableDataSource<any>;
	managementData = {
		expId: '',
		analystName: '',
		title: '',
		descr: '',
		startDate: '',
		endDate: '',
		hypoyhesis: '',
		team: '',
		pointOfContract: '',
		experimentChannel: '',
		experimentChannelTopic: '',
		featureTested: '',
		noOfVarient: '',
		testPopulation: '',
		experimentType: '',

	}
	constructor(private router: Router) {
		this.managementForm = new FormGroup({
			expId: new FormControl(''),
			analystName: new FormControl(''),
			title: new FormControl(''),
			descr: new FormControl(''),
			startDate: new FormControl(''),
			endDate: new FormControl(''),
			hypoyhesis: new FormControl(''),
			team: new FormControl(''),
			pointOfContract: new FormControl(''),
			experimentChannel: new FormControl(''),
			experimentChannelTopic: new FormControl(''),
			featureTested: new FormControl(''),
			noOfVarient: new FormControl(''),
			testPopulation: new FormControl(''),
			experimentType: new FormControl(''),

		})
	}

	displayedColumns: String[] = [
		'id',
		'analyst',
		'startDate',
		'endDate',
		'channel',
		'team',
		'title',
		'phase'
	];


	ngOnInit(): void {

		this.dataSource = new MatTableDataSource([]);
		this.dataSource.sort = this.sort;

		this.dataSource.paginator = this.paginator;


	}
	onSubmit() {
		console.log(this.managementForm.value);
		this.managementData = this.managementForm.value;
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;

	}

	redirectPage(row) {

		URLMapper.map((data) => {
			if (data.phase.toLowerCase() === row.phase.toLowerCase() && data.redirect) {
				this.router.navigate([data.url]);
			}
		}

		)

	}
	onSave() {
		console.log(this.managementForm.value);
		this.managementData = this.managementForm.value;

	}
}