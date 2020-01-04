# Centos image that uses cloud_user as non-privileged user
FROM centos:latest
RUN mkdir -p ~/new_dir1
RUN useradd -ms /bin/bash cloud_user
RUN mkdir -p /etc/myconf
RUN echo "Some config data" >> /etc/myconf/my.conf
USER cloud_user
RUN mkdir -p ~/new_dir2
