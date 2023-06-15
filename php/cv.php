<?php
$pageTitle = "My CV";
include('header.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><? echo $pageTitle; ?></title>
    <link rel="stylesheet" type="text/css" href="../css/basic.css">
</head>

<body>
    <header>
        <h1><?php echo $pageTitle; ?></h1>
        <nav>
            <ul>
                <li><a href="../index.php">Home</a></li>
                <li><a href="cv.php">CV</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Education</h2>
        <p>Details about your education</p>

        <h2>Experience</h2>
        <p>Details about your work experience</p>
    </main>
</body>
<?php include('footer.php'); ?>

</html>