import { Component, OnInit, ViewChild } from '@angular/core';
import { BookmarksService } from './services/bookmarks.service';
import { Bookmark } from './models/bookmark.model';
import { BookmarksResponse } from './models/bookmarks-response.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { WindowReferenceService } from '../../common/services/window-reference.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Array<Bookmark>;
  displayedColumns = ['id', 'title', 'description', 'created', 'actions'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  nativeWindow: any;

  // @Component({
  //   selector: 'menu-icons-example',
  //   templateUrl: 'menu-icons-example.html',
  //   styleUrls: ['menu-icons-example.css'],
  // })

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public bookmarksService: BookmarksService,
              public _windowReference: WindowReferenceService ) {
    this.nativeWindow = _windowReference.getNativeWindow();
  }

  openBookmarkURL(bookmark: Bookmark, event: Event) {
    event.preventDefault();

    this.nativeWindow.open(bookmark.url);



    // window.location.href = bookmark.url;
  }

  ngOnInit() {
    this.bookmarksService.getAll().subscribe(
      (data: BookmarksResponse) => {
        this.bookmarks = data.bookmarks;
        this.dataSource = new MatTableDataSource<Bookmark>(this.bookmarks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error(error);
      });
  }

}