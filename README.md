dockerfiles-centos-nodejs
=========================

CentOS 6 dockerfile for nodejs


Get Docker version

    # docker version

To build:

Copy the sources down and do the build-

    # docker build -rm -t <username>/nodejs:centos6 .

To run (if port 8080 is open on your host):

    # docker run -d -p 8080:8080 <username>/nodejs:centos6

or to assign a random port that maps to port 80 on the container:

    # docker run -d -p 8080 <username>/nodejs:centos6

To the port that the container is listening on:

    # docker ps

To test:

    # curl http://localhost:8080

Edited on 20/11/2017 3:49pm
Edited on 20/11/2017 4:04pm
Edited on 20/11/2017 6:02pm
Edited on 21/11/2017 10:19am ptamrakar branch
Edited on 21/11/2017 10:35am ptamrakar branch
Edited on 21/11/2017 10:40am ptamrakar2 branch