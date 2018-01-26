#!/usr/bin/env bash


set +e

ALPINE_VERSION=3.4
HAWKEYE_VERSION=0.18.0
ISSUES_REPORT_FILE=hawkeye_report.json


function create_container_with_code() {
  docker create -v /target --name target-code alpine:${ALPINE_VERSION} /bin/true;
  docker cp . target-code:/target;
}

function run_hawkeye_on_container_code() {
  docker run --volumes-from target-code --name hawkeye stono/hawkeye:${HAWKEYE_VERSION} scan /target --json ${ISSUES_REPORT_FILE}
  hawkeye_return=$?
}

function create_artifacts_folder() {
  mkdir -p /tmp/artifacts/;
}

function copy_report_from_docker_remote_to_artifacts() {
  docker cp hawkeye:/target/${ISSUES_REPORT_FILE} /tmp/artifacts/${ISSUES_REPORT_FILE}
}


create_container_with_code
run_hawkeye_on_container_code
create_artifacts_folder
copy_report_from_docker_remote_to_artifacts

if [ ${hawkeye_return} == 0 ]
then
    echo "Security checks passed"
else
    echo "Security checks failed. Report is available on artifacts tab."
fi

exit ${hawkeye_return}
