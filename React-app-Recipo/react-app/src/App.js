import logo from './logo.svg';
import './App.css';
import agilislogo from './agilis-logo-small.png';
import recipologo from './image-recipo-logo.png';

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={recipologo}
                            />
                    </div>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#jobs">Jobs</a></li>
                    <li><a href='#student'>Student</a></li>
                </ul>

                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Our mission:
                        </h1>
                        <p class="text-small">
                            We bring you the fastest way to decide on what you are going to eat next. Just select the ingerdients you have in the house and we give you the receipe.
                        </p>
                    </div>
                </div>
            </section>
           
           
            <footer className="footer">
            <div class="logo">
                        <img src={agilislogo}
                            />
                    </div>
                <p className="text-footer">
                    Copyright �-All rights are reserved
                </p>
            </footer>
        </div>
    )
}


export default App;
