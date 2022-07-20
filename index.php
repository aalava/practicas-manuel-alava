<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'api.spotify.com/v1/browse/new-releases?country=EC&limit=6',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer BQBgpUrXm_h2SrTt3lnXjwxcWKfEKAbb461-g723-76rEHvZ0-mdLbXkQj4pYGj4sgzVo-dTz_I5-ncOpgp1Pyzj5-K9IX5hkgEeKIUiJZdli6BdKqcHCmFQUUkF8s8-sYlDZeHrzXegOrxcAfrminloVoHChlB-HN-4c_dkOINQPgqDjqlLM2fuzvPOL9KeoaeRJRTS3gDtBJXrMcxqKKS_H0WnfQ'
  ),
));

$response = curl_exec($curl);

curl_close($curl);

//echo $response;

$test = json_decode($response, true);

foreach ($test as $test1) {
}
/*
for ($i = 0; $i < $test1['limit']; $i++){
	echo $test1['items'][$i]['artists'][0]['name'];
	echo '<br>';
}
*/

?>
<!DOCTYPE html>
<html lang="es">
    <head>

        <meta charset="utf-8" />
        <title>Mi Spotify APP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App css -->

        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-style" />

        <!-- icons -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />

    </head>

    <body class="loading" data-layout-mode="horizontal" data-layout-color="dark" data-layout-size="fluid" data-topbar-color="dark" data-leftbar-position="fixed">

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Topbar Start -->
            <div class="navbar-custom">
                <div class="container-fluid">
                     <ul class="list-unstyled topnav-menu float-end mb-0">

                        <li class="d-none d-lg-block">
                            <form class="app-search">
                                <div class="app-search-box">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search..." id="top-search">
                                        <button class="btn input-group-text" type="submit">
                                            <i class="fe-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </li>
    
                        <li class="dropdown d-inline-block d-lg-none">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-search noti-icon"></i>
                            </a>
                            <div class="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                                <form class="p-3">
                                    <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                </form>
                            </div>
                        </li>
            
                        <li class="dropdown notification-list topbar-dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fe-bell noti-icon"></i>
                                <span class="badge bg-danger rounded-circle noti-icon-badge">9</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-lg">
    
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h5 class="m-0">
                                        <span class="float-end">
                                            <a href="" class="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>Notification
                                    </h5>
                                </div>
    
                                <div class="noti-scroll" data-simplebar>
    
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-1.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Cristina Pride</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Hi, How are you? What about our next meeting</small>
                                        </p>
                                    </a>
    
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-primary">
                                            <i class="mdi mdi-comment-account-outline"></i>
                                        </div>
                                        <p class="notify-details">Caleb Flakelar commented on Admin
                                            <small class="text-muted">1 min ago</small>
                                        </p>
                                    </a>
    
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <img src="assets/images/users/user-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                                        <p class="notify-details">Karen Robinson</p>
                                        <p class="text-muted mb-0 user-msg">
                                            <small>Wow ! this admin looks good and awesome design</small>
                                        </p>
                                    </a>
    
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-warning">
                                            <i class="mdi mdi-account-plus"></i>
                                        </div>
                                        <p class="notify-details">New user registered.
                                            <small class="text-muted">5 hours ago</small>
                                        </p>
                                    </a>
    
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-info">
                                            <i class="mdi mdi-comment-account-outline"></i>
                                        </div>
                                        <p class="notify-details">Caleb Flakelar commented on Admin
                                            <small class="text-muted">4 days ago</small>
                                        </p>
                                    </a>
    
                                    <!-- item-->
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-secondary">
                                            <i class="mdi mdi-heart"></i>
                                        </div>
                                        <p class="notify-details">Carlos Crouch liked
                                            <b>Admin</b>
                                            <small class="text-muted">13 days ago</small>
                                        </p>
                                    </a>
                                </div>
    
                                <!-- All-->
                                <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                                    View all
                                    <i class="fe-arrow-right"></i>
                                </a>
    
                            </div>
                        </li>
    
                        <li class="dropdown notification-list topbar-dropdown">
                            <a class="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/users/user-1.jpg" alt="user-image" class="rounded-circle">
                                <span class="pro-user-name ms-1">
                                    Nowak <i class="mdi mdi-chevron-down"></i> 
                                </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                                <!-- item-->
                                <div class="dropdown-header noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>
    
                                <!-- item-->
                                <a href="contacts-profile.html" class="dropdown-item notify-item">
                                    <i class="fe-user"></i>
                                    <span>My Account</span>
                                </a>
    
                                <!-- item-->
                                <a href="auth-lock-screen.html" class="dropdown-item notify-item">
                                    <i class="fe-lock"></i>
                                    <span>Lock Screen</span>
                                </a>
    
                                <div class="dropdown-divider"></div>
    
                                <!-- item-->
                                <a href="auth-logout.html" class="dropdown-item notify-item">
                                    <i class="fe-log-out"></i>
                                    <span>Logout</span>
                                </a>
    
                            </div>
                        </li>
    
                        <li class="dropdown notification-list">
                            <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect waves-light">
                                <i class="fe-settings noti-icon"></i>
                            </a>
                        </li>
    
                    </ul>
    
                    <!-- LOGO -->
                    <div class="logo-box">
                        <a href="index.html" class="logo logo-light text-center">
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22">
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="16">
                            </span>
                        </a>
                        <a href="index.html" class="logo logo-dark text-center">
                            <span class="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22">
                            </span>
                            <span class="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="16">
                            </span>
                        </a>
                    </div>

                    <ul class="list-unstyled topnav-menu topnav-menu-left mb-0">

                        <li>
                            <!-- Mobile menu toggle (Horizontal Layout)-->
                            <a class="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            <!-- End mobile menu toggle-->
                        </li>
             
                    </ul>

                    <div class="clearfix"></div> 
        
                </div>
              
            </div>
            <!-- end Topbar -->

            <div class="topnav">
                <div class="container-fluid">
                    <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div class="collapse navbar-collapse" id="topnav-menu-content">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link arrow-none" href="index.html" id="topnav-dashboard" role="button"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-view-dashboard me-1"></i> Dashboard
                                    </a>
                        
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-ui" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-invert-colors me-1"></i> UI Elements <div class="arrow-down"></div>
                                    </a>

                                    <div class="dropdown-menu mega-dropdown-menu dropdown-mega-menu-xl" aria-labelledby="topnav-ui">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div>
                                                    <a href="ui-buttons.html" class="dropdown-item">Buttons</a>
                                                    <a href="ui-cards.html" class="dropdown-item">Cards</a>
                                                    <a href="ui-avatars.html" class="dropdown-item">Avatars</a>
                                                    <a href="ui-tabs-accordions.html" class="dropdown-item">Tabs & Accordions</a>
                                                    <a href="ui-modals.html" class="dropdown-item">Modals</a>
                                                    <a href="ui-progress.html" class="dropdown-item">Progress</a>

                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <a href="ui-notifications.html" class="dropdown-item">Notifications</a>
                                                    <a href="ui-offcanvas.html" class="dropdown-item">Offcanvas</a>
                                                    <a href="ui-placeholders.html" class="dropdown-item">Placeholders</a>
                                                    <a href="ui-spinners.html" class="dropdown-item">Spinners</a>
                                                    <a href="ui-images.html" class="dropdown-item">Images</a>
                                                    <a href="ui-carousel.html" class="dropdown-item">Carousel</a>
                                        
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <a href="ui-video.html" class="dropdown-item">Embed Video</a>
                                                    <a href="ui-dropdowns.html" class="dropdown-item">Dropdowns</a>
                                                    <a href="ui-tooltips-popovers.html" class="dropdown-item">Tooltips & Popovers</a>
                                                    <a href="ui-general.html" class="dropdown-item">General UI</a>
                                                    <a href="ui-typography.html" class="dropdown-item">Typography</a>
                                                    <a href="ui-grid.html" class="dropdown-item">Grid</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-apps" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fe-grid me-1"></i> Apps <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-apps">

                                        <a href="apps-calendar.html" class="dropdown-item">Calendar</a>
                                        <a href="apps-chat.html" class="dropdown-item">Chat</a>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-email"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Email <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-email">
                                                <a href="email-inbox.html" class="dropdown-item">Inbox</a>
                                                <a href="email-templates.html" class="dropdown-item">Email Templates</a>
                                            </div>
                                        </div> 

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-task"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Tasks <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-task">
                                                <a href="task-details.html" class="dropdown-item">Details</a>
                                                <a href="task-kanban-board.html" class="dropdown-item">Kanban Board</a>
                                            </div>
                                        </div> 
                                        <div class="dropdown">
                                            <a class="dropdown-item arrow-none" href="apps-projects.html" id="topnav-contact"
                                                role="button" aria-haspopup="true" aria-expanded="false">
                                                Projects
                                            </a>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-contacts"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Contacts <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-contacts">
                                                <a href="contacts-list.html" class="dropdown-item">Members List</a>
                                                <a href="contacts-profile.html" class="dropdown-item">Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                    

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-lifebuoy me-1"></i> Components <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-components">
                                        <a href="widgets.html" class="dropdown-item">Widgets</a>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-extendedui"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Extended UI <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-extendedui">
                                                <a href="extended-range-slider.html" class="dropdown-item">Range Slider</a>
                                                <a href="extended-sweet-alert.html" class="dropdown-item">Sweet Alert</a>
                                                <a href="extended-draggable-cards.html" class="dropdown-item">Draggable Cards</a>
                                                <a href="extended-tour.html" class="dropdown-item">Tour Page</a>
                                                <a href="extended-notification.html" class="dropdown-item">Notification</a>
                                                <a href="extended-treeview.html" class="dropdown-item">Tree View</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Forms <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-form">
                                                <a href="forms-elements.html" class="dropdown-item">General Elements</a>
                                                <a href="forms-advanced.html" class="dropdown-item">Advanced</a>
                                                <a href="forms-validation.html" class="dropdown-item">Validation</a>
                                                <a href="forms-wizard.html" class="dropdown-item">Wizard</a>
                                                <a href="forms-quilljs.html" class="dropdown-item">Quilljs Editor</a>
                                                <a href="forms-pickers.html" class="dropdown-item">Pickers</a>
                                                <a href="forms-file-uploads.html" class="dropdown-item">File Uploads</a>
                                                <a href="forms-x-editable.html" class="dropdown-item">X Editable</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               Charts <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                                <a href="charts-flot.html" class="dropdown-item">Flot Charts</a>
                                                <a href="charts-morris.html" class="dropdown-item">Morris Charts</a>
                                                <a href="charts-chartjs.html" class="dropdown-item">Chartjs Charts</a>
                                                <a href="charts-chartist.html" class="dropdown-item">Chartist Charts</a>
                                                <a href="charts-sparklines.html" class="dropdown-item">Sparklines Charts</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Tables <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-table">
                                                <a href="tables-basic.html" class="dropdown-item">Basic Tables</a>
                                                <a href="tables-datatables.html" class="dropdown-item">Data Tables</a>
                                                <a href="tables-editable.html" class="dropdown-item">Editable Tables</a>
                                                <a href="tables-responsive.html" class="dropdown-item">Responsive Tables</a>
                                                <a href="tables-tablesaw.html" class="dropdown-item">Tablesaw Tables</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Icons <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-icons">
                                                <a href="icons-feather.html" class="dropdown-item">Feather Icons</a>
                                                <a href="icons-mdi.html" class="dropdown-item">Material Design Icons</a>
                                                <a href="icons-dripicons.html" class="dropdown-item">Dripicons</a>
                                                <a href="icons-font-awesome.html" class="dropdown-item">Font Awesome 5</a>
                                                <a href="icons-themify.html" class="dropdown-item">Themify</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Maps <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-map">
                                                <a href="maps-google.html" class="dropdown-item">Google Maps</a>
                                                <a href="maps-vector.html" class="dropdown-item">Vector Maps</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-cards-outline me-1"></i> Pages <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-pages">
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Auth Style <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-auth">
                                                <a href="auth-login.html" class="dropdown-item">Log In</a>
                                                <a href="auth-register.html" class="dropdown-item">Register</a>
                                                <a href="auth-recoverpw.html" class="dropdown-item">Recover Password</a>
                                                <a href="auth-lock-screen.html" class="dropdown-item">Lock Screen</a>
                                                <a href="auth-confirm-mail.html" class="dropdown-item">Confirm Mail</a>
                                                <a href="auth-logout.html" class="dropdown-item">Logout</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-error"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Errors <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-error">
                                                <a href="pages-404.html" class="dropdown-item">Error 404</a>
                                                <a href="pages-500.html" class="dropdown-item">Error 500</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Utility <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-utility">
                                                <a href="pages-pricing.html" class="dropdown-item">Pricing</a>
                                                <a href="pages-timeline.html" class="dropdown-item">Timeline</a>
                                                <a href="pages-invoice.html" class="dropdown-item">Invoice</a>
                                                <a href="pages-faqs.html" class="dropdown-item">FAQs</a>
                                                <a href="pages-gallery.html" class="dropdown-item">Gallery</a>
                                                <a href="pages-maintenance.html" class="dropdown-item">Maintenance</a>
                                                <a href="pages-coming-soon.html" class="dropdown-item">Coming Soon</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="mdi mdi-card-bulleted-settings-outline me-1"></i> Layouts <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-layout">
                                        <a href="layouts-horizontal.html" class="dropdown-item">Horizontal</a>
                                        <a href="index.html" class="dropdown-item">Vertical</a>
                                        <a href="layouts-preloader.html" class="dropdown-item">Preloader</a>
                                    </div>
                                </li>
                            </ul> <!-- end navbar-->
                        </div> <!-- end .collapsed-->
                    </nav>
                </div> <!-- end container-fluid -->
            </div> <!-- end topnav-->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->
         
            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">				
						<!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Adminto</a></li>
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Layouts</a></li>
                                            <li class="breadcrumb-item active">Ultimos Lanzamientos</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Ultimos Lanzamientos</h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 

                        <div class="row">
                            <?php for ($i = 0; $i < $test1['limit']; $i++) { ?>
                                <div class="col-md-6 col-xl-2">								
                                    <!-- Simple card -->
                                    <div class="card"> 
                                        <img class="card-img-top img-fluid" src="<?php echo $test1['items'][$i]['images'][0]['url']; ?>" alt="Card image cap">
                                        <div class="card-body">
                                            <h4 class="card-title"><?php echo $test1['items'][$i]['artists'][0]['name']; ?></h4>
                                            <p class="card-text"><?php echo $test1['items'][$i]['name']; ?></p>
                                            <a href="#" class="btn btn-success">Reproducir</a> 
                                        </div>
                                    </div>
                                </div>
                                <!-- end col -->
                            <?php } ?>
                        </div>
						<!-- end row -->

                       
						
						<div class="row">
							<div class="col-md-6 col-xl-3">								
								<!-- Simple card -->
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> 
									</div>
								</div>
							</div>
							<!-- end col -->
							
							<div class="col-md-6 col-xl-3">
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> </div>
								</div>
							</div>
							<!-- end col -->
							
							<div class="col-md-6 col-xl-3">
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> 
									</div>
								</div>
							</div>
							<!-- end col -->
							
							<div class="col-md-6 col-xl-3">
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> </div>
								</div>
							</div>
							<!-- end col -->	
						</div>
                        <!-- end row -->
						
						<div class="row">
							<div class="col-md-6 col-xl-3">								
								<!-- Simple card -->
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> 
									</div>
								</div>
							</div>
							<!-- end col -->
							
							<div class="col-md-6 col-xl-3">
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> </div>
								</div>
							</div>
							<!-- end col -->
							
							<div class="col-md-6 col-xl-3">
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> 
									</div>
								</div>
							</div>
							<!-- end col -->
							
							<div class="col-md-6 col-xl-3">
								<div class="card"> 
									<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" class="btn btn-primary">Button</a> </div>
								</div>
							</div>
							<!-- end col -->	
						</div>                        
                        <!-- end row -->
						
					</div> <!-- container -->

                </div> <!-- content -->

                <!-- Footer Start -->
                <footer class="footer">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-6"> 
								<script>document.write(new Date().getFullYear())</script> &copy; Manuel Alava </div>
						</div>
					</div>
				</footer>
				<!-- end Footer -->

            </div>
			
            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <!-- Right Sidebar -->
        <div class="right-bar">

            <div data-simplebar class="h-100">

                <div class="rightbar-title">
                    <a href="javascript:void(0);" class="right-bar-toggle float-end">
                        <i class="mdi mdi-close"></i>
                    </a>
                    <h4 class="font-16 m-0 text-white">Theme Customizer</h4>
                </div>
        
                <!-- Tab panes -->
                <div class="tab-content pt-0">  

                    <div class="tab-pane active" id="settings-tab" role="tabpanel">

                        <div class="p-3">
                            <div class="alert alert-warning" role="alert">
                                <strong>Customize </strong> the overall color scheme, Layout, etc.
                            </div>

                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>
                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="layout-color" value="light"
                                    id="light-mode-check" checked />
                                <label class="form-check-label" for="light-mode-check">Light Mode</label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="layout-color" value="dark"
                                    id="dark-mode-check" />
                                <label class="form-check-label" for="dark-mode-check">Dark Mode</label>
                            </div>

                            <!-- Width -->
                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Width</h6>
                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="layout-size" value="fluid" id="fluid" checked />
                                <label class="form-check-label" for="fluid-check">Fluid</label>
                            </div>
                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="layout-size" value="boxed" id="boxed" />
                                <label class="form-check-label" for="boxed-check">Boxed</label>
                            </div>

                            <!-- Menu positions -->
                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Menus (Leftsidebar and Topbar) Positon</h6>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-position" value="fixed" id="fixed-check"
                                    checked />
                                <label class="form-check-label" for="fixed-check">Fixed</label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-position" value="scrollable"
                                    id="scrollable-check" />
                                <label class="form-check-label" for="scrollable-check">Scrollable</label>
                            </div>

                            <!-- Left Sidebar-->
                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Color</h6>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-color" value="light" id="light" />
                                <label class="form-check-label" for="light-check">Light</label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-color" value="dark" id="dark" checked/>
                                <label class="form-check-label" for="dark-check">Dark</label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-color" value="brand" id="brand" />
                                <label class="form-check-label" for="brand-check">Brand</label>
                            </div>

                            <div class="form-check form-switch mb-3">
                                <input type="checkbox" class="form-check-input" name="leftbar-color" value="gradient" id="gradient" />
                                <label class="form-check-label" for="gradient-check">Gradient</label>
                            </div>

                            <!-- size -->
                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Size</h6>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-size" value="default"
                                    id="default-size-check" checked />
                                <label class="form-check-label" for="default-size-check">Default</label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-size" value="condensed"
                                    id="condensed-check" />
                                <label class="form-check-label" for="condensed-check">Condensed <small>(Extra Small size)</small></label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="leftbar-size" value="compact"
                                    id="compact-check" />
                                <label class="form-check-label" for="compact-check">Compact <small>(Small size)</small></label>
                            </div>

                            <!-- User info -->
                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Sidebar User Info</h6>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="sidebar-user" value="true" id="sidebaruser-check" />
                                <label class="form-check-label" for="sidebaruser-check">Enable</label>
                            </div>


                            <!-- Topbar -->
                            <h6 class="fw-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="topbar-color" value="dark" id="darktopbar-check"
                                    checked />
                                <label class="form-check-label" for="darktopbar-check">Dark</label>
                            </div>

                            <div class="form-check form-switch mb-1">
                                <input type="checkbox" class="form-check-input" name="topbar-color" value="light" id="lighttopbar-check" />
                                <label class="form-check-label" for="lighttopbar-check">Light</label>
                            </div>

                            <div class="d-grid mt-4">
                                <button class="btn btn-primary" id="resetBtn">Reset to Default</button>
                                <a href="https://1.envato.market/admintoadmin" class="btn btn-danger mt-3" target="_blank"><i class="mdi mdi-basket me-1"></i> Purchase Now</a>
                            </div>

                        </div>

                    </div>
                </div>

            </div> <!-- end slimscroll-menu-->
        </div>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>

        <!-- Vendor -->
        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
        <script src="assets/libs/feather-icons/feather.min.js"></script>
		
        <!-- knob plugin -->
        <script src="assets/libs/jquery-knob/jquery.knob.min.js"></script>

  
        <!-- Dashboar init js-->
        <script src="assets/js/pages/dashboard.init.js"></script>

        <!-- App js-->
        <script src="assets/js/app.min.js"></script>

        <!-- Spotify JS -->
        <script src="latest-release.js"></script>
        
    </body>
</html>