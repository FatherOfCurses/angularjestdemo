import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import {FormsModule} from "@angular/forms";
import {Hero} from "../hero";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  const hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero property', async() => {
    const compiled = fixture.nativeElement;
    const heroName = compiled.querySelector('[data-hero-property]').;
    expect(heroName).toBeTruthy();
    expect(heroName).toEqual('Windstorm');
  })

  it('should render hero title',  () => {
    const compiled = fixture.nativeElement;
    const heroNameTitle = compiled.querySelector('[data-hero-title');
    expect(heroNameTitle).toBeTruthy();
    expect(heroNameTitle).toEqual('WINDSTORM Details');
  });

  it('update field with input', async() => {
    const compiled = fixture.nativeElement;
    const heroNameField = compiled.querySelector('[data-hero-property');
    expect(heroNameField).toEqual('Windstorm');
    fixture.detectChanges();
    expect(heroNameField).toEqual('Superman');
  })
});
